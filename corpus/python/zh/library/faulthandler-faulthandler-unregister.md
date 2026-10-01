---
id: "python-zh-function-faulthandler-unregister"
language: "python"
lang: "zh"
category: "function"
name: "unregister"
signature: "unregister(signum)"
directive: "function"
module: "faulthandler"
source_url: "https://docs.python.org/zh-cn/3/library/faulthandler.html#faulthandler.unregister"
license: "PSF"
updated: "2026-10-01"
---

# unregister

Unregister a user signal: uninstall the handler of the *signum* signal
installed by `register`. Return `True` if the signal was registered,
`False` otherwise.

Windows 中不可用。
