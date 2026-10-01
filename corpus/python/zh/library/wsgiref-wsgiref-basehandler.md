---
id: "python-zh-function-wsgiref-basehandler"
language: "python"
lang: "zh"
category: "function"
name: "BaseHandler"
signature: "BaseHandler()"
directive: "class"
module: "wsgiref"
source_url: "https://docs.python.org/zh-cn/3/library/wsgiref.html#wsgiref.BaseHandler"
license: "PSF"
updated: "2026-10-01"
---

# BaseHandler

This is an abstract base class for running WSGI applications.  Each instance
will handle a single HTTP request, although in principle you could create a
subclass that was reusable for multiple requests.

:class:`BaseHandler` 实例只有一个方法提供给外部使用:

method:: BaseHandler.run(app)

All of the other `BaseHandler` methods are invoked by this method in the
process of running the application, and thus exist primarily to allow
customizing the process.

以下方法必须在子类中被重载:

method:: BaseHandler._write(data)

method:: BaseHandler._flush()

method:: BaseHandler.get_stdin()

method:: BaseHandler.get_stderr()

method:: BaseHandler.add_cgi_vars()

Here are some other methods and attributes you may wish to override. This list
is only a summary, however, and does not include every method that can be
overridden.  You should consult the docstrings and source code for additional
information before attempting to create a customized `BaseHandler`
subclass.

用于自定义 WSGI 环境的属性和方法:

attribute:: BaseHandler.wsgi_multithread

attribute:: BaseHandler.wsgi_multiprocess

attribute:: BaseHandler.wsgi_run_once

attribute:: BaseHandler.os_environ

attribute:: BaseHandler.server_software

method:: BaseHandler.get_scheme()

method:: BaseHandler.setup_environ()

用于自定义异常处理的方法和属性:

method:: BaseHandler.log_exception(exc_info)

attribute:: BaseHandler.traceback_limit

method:: BaseHandler.error_output(environ, start_response)

attribute:: BaseHandler.error_status

attribute:: BaseHandler.error_headers

attribute:: BaseHandler.error_body

Methods and attributes for PEP 3333's "Optional Platform-Specific File
Handling" feature:

attribute:: BaseHandler.wsgi_file_wrapper

method:: BaseHandler.sendfile()

杂项方法和属性:

attribute:: BaseHandler.origin_server

attribute:: BaseHandler.http_version
