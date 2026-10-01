---
id: "python-en-function-test-runinsubprocess"
language: "python"
lang: "en"
category: "function"
name: "runInSubprocess"
signature: "runInSubprocess(*, options=(), env=None, timeout=None)"
directive: "decorator"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.runInSubprocess"
license: "PSF"
updated: "2026-10-01"
---

# runInSubprocess

Decorator that runs the decorated test in a fresh interpreter subprocess, in
isolation, so that it does not share global or interpreter state with the
rest of the test run.  It can decorate a test method or a whole
`~unittest.TestCase` subclass.  Decorated methods must take no extra
arguments.  A failure, error or skip in the subprocess is reported for the
corresponding test, and individual `subtests` that fail or are skipped are reported
individually.  A reported failure or error shows the original subprocess
traceback as the cause of the exception.

When a **method** is decorated, only that method runs in a subprocess; all
fixtures (`~unittest.TestCase.setUp` / `~unittest.TestCase.tearDown`,
`~unittest.TestCase.setUpClass` / `~unittest.TestCase.tearDownClass`
and `setUpModule()` / `tearDownModule()`) run both in the parent process
(as usual) and in the subprocess around the method.

When a **class** is decorated, the whole class runs in a single subprocess,
and `~unittest.TestCase.setUpClass`,
`~unittest.TestCase.tearDownClass`, `~unittest.TestCase.setUp`
and `~unittest.TestCase.tearDown` run once each in the subprocess and
are skipped in the parent process.  A failure or skip of
`~unittest.TestCase.setUpClass` in the subprocess is reported for the
whole class.  `setUpModule()` cannot be controlled by a class decorator,
so it still runs in the parent process too; test it with
`runningInSubprocess` if needed.

The subprocess inherits the enabled resources (`-u`), memory limit
(`-M`) and verbosity (`-v`) of the parent test run, so that
`~test.support.requires_resource`, `~test.support.requires`,
`~test.support.bigmemtest` and the like behave consistently in both
processes.

*options* is a sequence of interpreter command line options
to run the subprocess with,
and *env* is a mapping of environment variables to set in it,
on top of the inherited environment.
A value of `None` in *env* unsets the variable.
Note that `-E` and `-I` make the subprocess ignore
the `PYTHON*` environment variables, including `PYTHONPATH`.

*timeout* is the number of seconds to wait for the subprocess;
the test is reported as an error if it does not complete in time.
By default there is no timeout,
and a hung test is left to the timeout of the test runner.

The test is skipped on platforms without subprocess support.
