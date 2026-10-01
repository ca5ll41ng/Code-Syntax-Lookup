---
id: "python-en-function-subprocess-create_new_process_group"
language: "python"
lang: "en"
category: "function"
name: "CREATE_NEW_PROCESS_GROUP"
directive: "data"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.CREATE_NEW_PROCESS_GROUP"
license: "PSF"
updated: "2026-10-01"
---

# CREATE_NEW_PROCESS_GROUP

A `Popen` `creationflags` parameter to specify that a new process
group will be created. This flag is necessary for using `os.kill`
on the subprocess.

This flag is ignored if `CREATE_NEW_CONSOLE` is specified.
