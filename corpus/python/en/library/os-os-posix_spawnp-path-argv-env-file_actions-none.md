---
id: "python-en-function-os-posix_spawnp-path-argv-env-file_actions-none"
language: "python"
lang: "en"
category: "function"
name: "posix_spawnp(path, argv, env, *, file_actions=None, \\"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.posix_spawnp(path, argv, env, *, file_actions=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# posix_spawnp(path, argv, env, *, file_actions=None, \

Wraps the :c`posix_spawnp` C library API for use from Python.

Similar to `posix_spawn` except that the system searches
for the *executable* file in the list of directories specified by the
`PATH` environment variable (in the same way as for `execvp(3)`).

audit-event:: os.posix_spawn path,argv,env os.posix_spawnp

> *Added in 3.8*

availability:: POSIX, not WASI, not Android, not iOS.
