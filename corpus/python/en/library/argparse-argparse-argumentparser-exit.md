---
id: "python-en-function-argparse-argumentparser-exit"
language: "python"
lang: "en"
category: "function"
name: "ArgumentParser.exit"
signature: "ArgumentParser.exit(status=0, message=None)"
directive: "method"
module: "argparse"
source_url: "https://docs.python.org/3/library/argparse.html#argparse.ArgumentParser.exit"
license: "PSF"
updated: "2026-10-01"
---

# ArgumentParser.exit

This method terminates the program, exiting with the specified *status*
and, if given, it prints a *message* to `sys.stderr` before that.
The user can override this method to handle these steps differently::

 class ErrorCatchingArgumentParser(argparse.ArgumentParser):
     def exit(self, status=0, message=None):
         if status:
             raise Exception(f'Exiting because of an error: {message}')
         exit(status)
