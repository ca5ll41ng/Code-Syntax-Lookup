---
id: "python-en-function-os-wifstopped"
language: "python"
lang: "en"
category: "function"
name: "WIFSTOPPED"
signature: "WIFSTOPPED(status)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WIFSTOPPED"
license: "PSF"
updated: "2026-10-01"
---

# WIFSTOPPED

Return `True` if the process was stopped by delivery of a signal,
otherwise return `False`.

`WIFSTOPPED` only returns `True` if the `waitpid` call was
done using `WUNTRACED` option or when the process is being traced (see
`ptrace(2)`).

availability:: Unix, not WASI, not Android, not iOS.
