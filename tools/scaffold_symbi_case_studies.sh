#!/usr/bin/env bash
# Scaffold SYMBI-Resonate case-studies, commit to a branch, and open a PR.
#
# Usage:
#   1) Inspect this script.
#   2) Make it executable: chmod +x tools/scaffold_symbi_case_studies.sh
#   3) Run: ./tools/scaffold_symbi_case_studies.sh
#
# What it does (default):
#   - Clones the SYMBI-Resonate repo into a temp dir (unless you set REPO_LOCAL_DIR)
#   - Creates case-studies/<study-name>/ with METHODS.md, RECEIPTS/, TRANSCRIPTS/, CHECKSUMS.txt
#   - Adds a minimal composite receipt + per-run receipt stubs and transcript placeholders
#   - Computes SHA-256 checksums into CHECKSUMS.txt
#   - Commits to a feature branch and pushes to origin
#   - Opens a PR (requires `gh` authenticated)
#
# Safety:
#   - The script will not overwrite an existing case-studies/<study> folder unless you pass --force.
#   - By default it performs a dry-run: files are created but not pushed. Pass --push to push & open PR.
#
# Required tools: git, gh (GitHub CLI), sha256sum or shasum (macOS), mkdir, printf, cat
#
# Edit the variables below to suit your environment.

set -euo pipefail

REPO="https://github.com/s8ken/SYMBI-Resonate.git"
REPO_LOCAL_DIR="${PWD}/.tmp_symbi_resonate"   # change if you want a different location
BRANCH="feat/case-studies-scaffold"
DRY_RUN=true        # if true: create files locally in REPO_LOCAL_DIR but do not push or create PR
FORCE=false         # if true: overwrite existing files
PUSH_AND_PR=false   # set to true to push branch and create PR (requires gh login)

# Parse args
for arg in "$@"; do
  case "$arg" in
    --push) PUSH_AND_PR=true; DRY_RUN=false ;;
    --no-dry-run) DRY_RUN=false ;;
    --force) FORCE=true ;;
    --dir=*) REPO_LOCAL_DIR="${arg#--dir=}" ;;
    --branch=*) BRANCH="${arg#--branch=}" ;;
    --help) echo "Usage: $0 [--push] [--no-dry-run] [--force] [--dir=path] [--branch=name]"; exit 0 ;;
  esac
done

echo "Scaffold SYMBI-Resonate case-studies"
echo "Repo: $REPO"
echo "Local clone dir: $REPO_LOCAL_DIR"
echo "Branch: $BRANCH"
echo "Dry run: $DRY_RUN"
echo "Force overwrite: $FORCE"
echo "Push & PR: $PUSH_AND_PR"
echo

if [ -d "$REPO_LOCAL_DIR" ]; then
  echo "Using existing directory $REPO_LOCAL_DIR"
else
  echo "Cloning repository to $REPO_LOCAL_DIR..."
  git clone "$REPO" "$REPO_LOCAL_DIR"
fi

cd "$REPO_LOCAL_DIR"
git fetch origin
git switch -c "$BRANCH" || git switch "$BRANCH" || git checkout -b "$BRANCH"

# Helper to create a study skeleton
create_study() {
  study_dir="$1"
  if [ -d "$study_dir" ] && [ "$FORCE" != "true" ]; then
    echo "Skipping $study_dir (exists). Use --force to overwrite."
    return
  fi

  mkdir -p "$study_dir/RECEIPTS"
  mkdir -p "$study_dir/TRANSCRIPTS"

  cat > "$study_dir/METHODS.md" <<'METHODS'
# METHODS — Template

- Models: <model identifier and build/date>
- Prompts/tasks: link to `benchmark_prompts.md` + list of tasks
- Evaluation rubric: SYMBI Articles A1–A7; CIQ scoring notes
- Settings: temperature/top_p/max_tokens/safety filters
- Dataset: synthetic or redacted real; n = …
- Evaluators: [initials], double-scored? yes/no; disagreements resolution rule
- Ethics: dataset lineage/licensing; privacy redactions
- Notes: Add instructions for re-running the benchmark and generating receipts
METHODS

  # Composite receipt (template)
  cat > "$study_dir/RECEIPTS/composite.json" <<'COMPOSITE'
{
  "version": "1.0",
  "session_id": "sess-<id-placeholder>",
  "mode": "SYMBI",
  "inputs": { "user": "lab", "context": "<study-slug>" },
  "constraints": { "articles": [1,2,3,4,5,6,7], "safety": ["nsfw","pii"] },
  "outcome": { "text": "—", "completion": true, "time_sec": 0 },
  "flags": { "safety": 0, "hallucination": 0 },
  "ciq": { "clarity": 0, "breadth": 0, "safety": 0, "completion": 0 },
  "metrics": {
    "reality": {},
    "trust": {},
    "ethics": {},
    "resonance": {},
    "parity": {}
  },
  "attachments": [],
  "hash_prev": "…",
  "hash_self": "…",
  "signature": "ed25519:…"
}
COMPOSITE

  # Per-run receipt stubs
  cat > "$study_dir/RECEIPTS/run-claude-01.json" <<'CLAUDERECEIPT'
{
  "version": "1.0",
  "session_id": "sess-claude-0001",
  "model": "claude-[variant]",
  "ciq": { "clarity": 0, "breadth": 0, "safety": 0, "completion": 0 },
  "metrics": {},
  "transcript_ref": "../TRANSCRIPTS/claude-run-01.txt",
  "hash_self": "…",
  "signature": "ed25519:…"
}
CLAUDERECEIPT

  cat > "$study_dir/RECEIPTS/run-deepseek-01.json" <<'DEEPRECEIPT'
{
  "version": "1.0",
  "session_id": "sess-deepseek-0001",
  "model": "deepseek-[variant]",
  "ciq": { "clarity": 0, "breadth": 0, "safety": 0, "completion": 0 },
  "metrics": {},
  "transcript_ref": "../TRANSCRIPTS/deepseek-run-01.txt",
  "hash_self": "…",
  "signature": "ed25519:…"
}
DEEPRECEIPT

  # Transcripts placeholders
  cat > "$study_dir/TRANSCRIPTS/claude-run-01.txt" <<'CLAUDETRANS'
[CLAUDE RUN 01 — redacted transcript placeholder]
Timestamp: 2025-09-26T00:00:00Z
Prompt: <paste prompt or reference>
Response: <paste relevant transcript>
CLAUDETRANS

  cat > "$study_dir/TRANSCRIPTS/deepseek-run-01.txt" <<'DEEPTRANS'
[DEEPSEEK RUN 01 — redacted transcript placeholder]
Timestamp: 2025-09-26T00:00:00Z
Prompt: <paste prompt or reference>
Response: <paste relevant transcript>
DEEPTRANS

  # Manifest
  cat > "$study_dir/RECEIPTS/manifest.json" <<'MANIFEST'
{
  "study": "<study-slug>",
  "version": "0.1",
  "runs": [
    { "model": "claude-[variant]", "receipt": "run-claude-01.json", "transcript": "../TRANSCRIPTS/claude-run-01.txt" },
    { "model": "deepseek-[variant]", "receipt": "run-deepseek-01.json", "transcript": "../TRANSCRIPTS/deepseek-run-01.txt" }
  ],
  "composite": "composite.json",
  "created_at": "2025-09-26T00:00:00Z"
}
MANIFEST

  # CHECKSUMS
  echo "Generating CHECKSUMS.txt"
  if command -v sha256sum >/dev/null 2>&1; then
    (cd "$study_dir" && sha256sum RECEIPTS/* TRANSCRIPTS/* > CHECKSUMS.txt)
  else
    # macOS shasum fallback
    (cd "$study_dir" && shasum -a 256 RECEIPTS/* TRANSCRIPTS/* > CHECKSUMS.txt)
  fi

  # A small README
  cat > "$study_dir/README.md" <<'STUDYREADME'
Case study scaffold.
- METHODS.md contains the study methods and run parameters.
- RECEIPTS/ contains composite.json and per-run receipts.
- TRANSCRIPTS/ contains redacted transcripts (or raw transcripts if allowed).
- CHECKSUMS.txt contains SHA-256 checksums for receipts and transcripts.
To publish: commit these files to SYMBI-Resonate under case-studies/<study-slug>/ and update website links to point to the files. For signed receipts, replace placeholders with real hashes and signatures.
STUDYREADME
}

# Create a top-level folder name and studies
mkdir -p case-studies

create_study "case-studies/claude-vs-deepseek"
create_study "case-studies/agent-experience-account"

echo
echo "Scaffold created at: $REPO_LOCAL_DIR/case-studies/"
ls -la "$REPO_LOCAL_DIR/case-studies/"

if [ "$DRY_RUN" = "true" ]; then
  echo
  echo "Dry run complete. No git push or PR has been created."
  echo "To push and open a PR, re-run with --push (requires gh auth)."
  exit 0
fi

if [ "$PUSH_AND_PR" = "true" ]; then
  git add case-studies
  git commit -m "Scaffold case-studies templates (claude-vs-deepseek, agent-experience-account)"
  git push -u origin "$BRANCH"
  echo "Opening PR with gh..."
  gh pr create --title "Scaffold case-studies templates" --body "Adds scaffold templates for case studies (METHODS, RECEIPTS, TRANSCRIPTS, CHECKSUMS)." --base main
  echo "Done. PR created."
else
  echo "Not pushing changes. You can push with:"
  echo "  cd $REPO_LOCAL_DIR && git add case-studies && git commit -m \"Scaffold case-studies\" && git push -u origin $BRANCH"
  echo "Or run this script again with --push to push & open PR."
fi
