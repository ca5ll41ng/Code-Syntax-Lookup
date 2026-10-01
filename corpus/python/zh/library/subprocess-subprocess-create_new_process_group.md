---
id: "python-zh-function-subprocess-create_new_process_group"
language: "python"
lang: "zh"
category: "function"
name: "CREATE_NEW_PROCESS_GROUP"
directive: "data"
module: "subprocess"
source_url: "https://docs.python.org/zh-cn/3/library/subprocess.html#subprocess.CREATE_NEW_PROCESS_GROUP"
license: "PSF"
updated: "2026-10-01"
---

# CREATE_NEW_PROCESS_GROUP

A `Popen` `creationflags` parameter to specify that a new process
group will be created. This flag is necessary for using `os.kill`
on the subprocess.

如果指定了 :data:`CREATE_NEW_CONSOLE` 则这个旗标会被忽略。
