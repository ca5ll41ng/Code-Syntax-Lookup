---
id: "python-zh-function-asyncio-protocol-subprocesstransport-kill"
language: "python"
lang: "zh"
category: "function"
name: "SubprocessTransport.kill"
signature: "SubprocessTransport.kill()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessTransport.kill"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessTransport.kill

杀死子进程。

On POSIX systems, the function sends SIGKILL to the subprocess.
On Windows, this method is an alias for `terminate`.

另请参见 :meth:`subprocess.Popen.kill`。
