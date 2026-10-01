---
id: "python-zh-function-os-killpg"
language: "python"
lang: "zh"
category: "function"
name: "killpg"
signature: "killpg(pgid, sig, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.killpg"
license: "PSF"
updated: "2026-10-01"
---

# killpg

将信号 *sig* 发送给进程组 *pgid*。

audit-event:: os.killpg pgid,sig os.killpg

availability:: Unix, not WASI, not iOS.
