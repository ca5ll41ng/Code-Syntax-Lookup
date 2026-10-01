---
id: "python-zh-function-shutil-chown-path-user-none-group-none-dir_fd-none"
language: "python"
lang: "zh"
category: "function"
name: "chown(path, user=None, group=None, *, dir_fd=None, \\"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/zh-cn/3/library/shutil.html#shutil.chown(path, user=None, group=None, *, dir_fd=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# chown(path, user=None, group=None, *, dir_fd=None, \

修改给定 *path* 的所有者 *user* 和/或 *group*。

*user* can be a system user name or a uid; the same applies to *group*. At
least one argument is required.

另请参阅下层的函数 :func:`os.chown`。

audit-event:: shutil.chown path,user,group shutil.chown

availability:: Unix.

> *Added in 3.3*

> *Changed in 3.13*: Added *dir_fd* and *follow_symlinks* parameters.
