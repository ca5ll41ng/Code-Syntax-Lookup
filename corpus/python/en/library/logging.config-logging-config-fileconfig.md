---
id: "python-en-function-logging-config-fileconfig"
language: "python"
lang: "en"
category: "function"
name: "fileConfig"
signature: "fileConfig(fname, defaults=None, disable_existing_loggers=True, encoding=None)"
directive: "function"
module: "logging.config"
source_url: "https://docs.python.org/3/library/logging.config.html#logging.config.fileConfig"
license: "PSF"
updated: "2026-10-01"
---

# fileConfig

Reads the logging configuration from a `configparser`\-format file. The
format of the file should be as described in
`logging-config-fileformat`.
This function can be called several times from an application, allowing an
end user to select from various pre-canned configurations (if the developer
provides a mechanism to present the choices and load the chosen
configuration).

It will raise `FileNotFoundError` if the file
doesn't exist and `RuntimeError` if the file is invalid or
empty.

:param fname: A filename, or a file-like object, or an instance derived
              from `~configparser.RawConfigParser`. If a
              `RawConfigParser`-derived instance is passed, it is used as
              is. Otherwise, a `~configparser.ConfigParser` is
              instantiated, and the configuration read by it from the
              object passed in `fname`. If that has a `readline`
              method, it is assumed to be a file-like object and read using
              `~configparser.ConfigParser.read_file`; otherwise,
              it is assumed to be a filename and passed to
              `~configparser.ConfigParser.read`.

:param defaults: Defaults to be passed to the `ConfigParser` can be specified
                 in this argument.

:param disable_existing_loggers: If specified as `False`, loggers which
                                 exist when this call is made are left
                                 enabled. The default is `True` because this
                                 enables old behaviour in a
                                 backward-compatible way. This behaviour is to
                                 disable any existing non-root loggers unless
                                 they or their ancestors are explicitly named
                                 in the logging configuration.

:param encoding: The encoding used to open file when *fname* is filename.

> *Changed in 3.4*: An instance of a subclass of :class:`~configparser.RawConfigParser` is now accepted as a value for ``fname``. This facilitates:  * Use of a configuration file where logging configuration is just part   of the overall application configuration. * Use of a configuration read from a file, and then modified by the using   application (e.g. based on command-line parameters or other aspects   of the runtime environment) before being passed to ``fileConfig``.

> *Changed in 3.10*: Added the *encoding* parameter.

> *Changed in 3.12*: An exception will be thrown if the provided file doesn't exist or is invalid or empty.
