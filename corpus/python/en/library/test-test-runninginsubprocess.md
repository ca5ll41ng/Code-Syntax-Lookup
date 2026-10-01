---
id: "python-en-function-test-runninginsubprocess"
language: "python"
lang: "en"
category: "function"
name: "runningInSubprocess"
directive: "data"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.runningInSubprocess"
license: "PSF"
updated: "2026-10-01"
---

# runningInSubprocess

`True` while the code runs in the isolated subprocess spawned by
`runInSubprocess`, and `False` otherwise (including in the parent
process and in a normal, non-isolated test run).  Fixtures such as
`~unittest.TestCase.setUp`, `~unittest.TestCase.tearDown`,
`~unittest.TestCase.setUpClass`, `~unittest.TestCase.tearDownClass`,
`setUpModule()` and `tearDownModule()` can test it to choose which code
to run in the subprocess.
