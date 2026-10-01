---
id: "python-en-function-termios-tcsetattr"
language: "python"
lang: "en"
category: "function"
name: "tcsetattr"
signature: "tcsetattr(fd, when, attributes)"
directive: "function"
module: "termios"
source_url: "https://docs.python.org/3/library/termios.html#termios.tcsetattr"
license: "PSF"
updated: "2026-10-01"
---

# tcsetattr

Set the tty attributes for file descriptor *fd* from the *attributes*, which is
a list like the one returned by `tcgetattr`.  The *when* argument
determines when the attributes are changed:

data:: TCSANOW

data:: TCSADRAIN

data:: TCSAFLUSH
