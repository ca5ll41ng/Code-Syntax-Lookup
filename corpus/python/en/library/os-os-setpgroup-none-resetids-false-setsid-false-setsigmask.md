---
id: "python-en-function-os-setpgroup-none-resetids-false-setsid-false-setsigmask"
language: "python"
lang: "en"
category: "function"
name: "setpgroup=None, resetids=False, setsid=False, setsigmask=(), \\"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.setpgroup=None, resetids=False, setsid=False, setsigmask=(), \\"
license: "PSF"
updated: "2026-10-01"
---

# setpgroup=None, resetids=False, setsid=False, setsigmask=(), \

Wraps the :c`posix_spawn` C library API for use from Python.

Most users should use `subprocess.run` instead of `posix_spawn`.

The positional-only arguments *path*, *args*, and *env* are similar to
`execve`. *env* is allowed to be `None`, in which case current
process' environment is used.

The *path* parameter is the path to the executable file.  The *path* should
contain a directory.  Use `posix_spawnp` to pass an executable file
without directory.

The *file_actions* argument may be a sequence of tuples describing actions
to take on specific file descriptors in the child process between the C
library implementation's :c`fork` and :c`exec` steps.
The first item in each tuple must be one of the three type indicator
listed below describing the remaining tuple elements:

data:: POSIX_SPAWN_OPEN

data:: POSIX_SPAWN_CLOSE

data:: POSIX_SPAWN_DUP2

data:: POSIX_SPAWN_CLOSEFROM

These tuples correspond to the C library
:c`posix_spawn_file_actions_addopen`,
:c`posix_spawn_file_actions_addclose`,
:c`posix_spawn_file_actions_adddup2`, and
:c`posix_spawn_file_actions_addclosefrom_np` API calls used to prepare
for the :c`posix_spawn` call itself.

The *setpgroup* argument will set the process group of the child to the value
specified. If the value specified is 0, the child's process group ID will be
made the same as its process ID. If the value of *setpgroup* is not set, the
child will inherit the parent's process group ID. This argument corresponds
to the C library :c`POSIX_SPAWN_SETPGROUP` flag.

If the *resetids* argument is `True` it will reset the effective UID and
GID of the child to the real UID and GID of the parent process. If the
argument is `False`, then the child retains the effective UID and GID of
the parent. In either case, if the set-user-ID and set-group-ID permission
bits are enabled on the executable file, their effect will override the
setting of the effective UID and GID. This argument corresponds to the C
library :c`POSIX_SPAWN_RESETIDS` flag.

If the *setsid* argument is `True`, it will create a new session ID
for `posix_spawn`. *setsid* requires :c`POSIX_SPAWN_SETSID`
or :c`POSIX_SPAWN_SETSID_NP` flag. Otherwise, `NotImplementedError`
is raised.

The *setsigmask* argument will set the signal mask to the signal set
specified. If the parameter is not used, then the child inherits the
parent's signal mask. This argument corresponds to the C library
:c`POSIX_SPAWN_SETSIGMASK` flag.

The *sigdef* argument will reset the disposition of all signals in the set
specified. This argument corresponds to the C library
:c`POSIX_SPAWN_SETSIGDEF` flag.

The *scheduler* argument must be a tuple containing the (optional) scheduler
policy and an instance of `sched_param` with the scheduler parameters.
A value of `None` in the place of the scheduler policy indicates that is
not being provided. This argument is a combination of the C library
:c`POSIX_SPAWN_SETSCHEDPARAM` and :c`POSIX_SPAWN_SETSCHEDULER`
flags.

audit-event:: os.posix_spawn path,argv,env os.posix_spawn

> *Added in 3.8*

> *Changed in 3.13*: *env* parameter accepts ``None``. ``os.POSIX_SPAWN_CLOSEFROM`` is available on platforms where :c:func:`!posix_spawn_file_actions_addclosefrom_np` exists.

availability:: Unix, not WASI, not Android, not iOS.
