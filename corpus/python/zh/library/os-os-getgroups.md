---
id: "python-zh-function-os-getgroups"
language: "python"
lang: "zh"
category: "function"
name: "getgroups"
signature: "getgroups()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.getgroups"
license: "PSF"
updated: "2026-10-01"
---

# getgroups

返回当前进程关联的附加组ID列表

availability:: Unix, not WASI.

> **Note**
>
> On macOS, `getgroups` behavior differs somewhat from
> other Unix platforms. If the Python interpreter was built with a
> deployment target of `10.5` or earlier, `getgroups` returns
> the list of effective group ids associated with the current user process;
> this list is limited to a system-defined number of entries, typically 16,
> and may be modified by calls to `setgroups` if suitably privileged.
> If built with a deployment target greater than `10.5`,
> `getgroups` returns the current group access list for the user
> associated with the effective user id of the process; the group access
> list may change over the lifetime of the process, it is not affected by
> calls to `setgroups`, and its length is not limited to 16.  The
> deployment target value can be obtained with
> `sysconfig.get_config_var('MACOSX_DEPLOYMENT_TARGET')`.
>
