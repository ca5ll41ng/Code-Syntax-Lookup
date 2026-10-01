---
id: "python-en-function-cmd-cmd-use_rawinput"
language: "python"
lang: "en"
category: "function"
name: "Cmd.use_rawinput"
directive: "attribute"
module: "cmd"
source_url: "https://docs.python.org/3/library/cmd.html#cmd.Cmd.use_rawinput"
license: "PSF"
updated: "2026-10-01"
---

# Cmd.use_rawinput

A flag, defaulting to true.  If true, `cmdloop` uses `input` to
display a prompt and read the next command; if false, `sys.stdout.write()`
and `sys.stdin.readline()` are used. (This means that by importing
`readline`, on systems that support it, the interpreter will automatically
support `Emacs`\ -like line editing  and command-history keystrokes.)
