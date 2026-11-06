#!/usr/bin/env bash
set -u

cd -- "$(dirname -- "${BASH_SOURCE[0]}")" || exit 1

# Prefer the Homebrew runtime over the macOS system Ruby.
for preview_ruby_bin in /opt/homebrew/opt/ruby@3.3/bin /usr/local/opt/ruby@3.3/bin; do
  if [ -x "$preview_ruby_bin/ruby" ]; then
    export PATH="$preview_ruby_bin:$PATH"
    break
  fi
done

if [ "${REDNOTE_BACKUP_ON_PREVIEW:-1}" = "1" ]; then
  bash backup_rednote_sheet.sh
fi

exec bundle _2.2.19_ exec jekyll serve --host 127.0.0.1 --port 4000 "$@"
