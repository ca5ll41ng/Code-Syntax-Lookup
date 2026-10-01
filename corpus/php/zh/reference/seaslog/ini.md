---
id: "zh-php-guide-seaslog-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "seaslog.configuration"
title: "运行时配置"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| seaslog.appender | 1 | `INI_SYSTEM` |  |
| seaslog.appender_retry | 0 | `INI_ALL` |  |
| seaslog.level | 8 | `INI_ALL` |  |
| seaslog.remote_host | 127.0.0.1 | `INI_ALL` |  |
| seaslog.remote_port | 514 | `INI_ALL` |  |
| seaslog.remote_timeout | 1 | `INI_SYSTEM` |  |
| seaslog.default_basepath | /var/log/www | `INI_SYSTEM` |  |
| seaslog.default_logger | default | `INI_SYSTEM` |  |
| seaslog.default_template | %T \| %L \| %P \| %Q \| %t \| %M | `INI_SYSTEM` |  |
| seaslog.default_datetime_format | Y-m-d H:i:s | `INI_SYSTEM` |  |
| seaslog.trace_error | 1 | `INI_ALL` |  |
| seaslog.trace_exception | 0 | `INI_SYSTEM` |  |
| seaslog.trace_notice | 0 | `INI_ALL` |  |
| seaslog.trace_warning | 0 | `INI_ALL` |  |
| seaslog.use_buffer | 0 | `INI_SYSTEM` |  |
| seaslog.buffer_size | 0 | `INI_ALL` |  |
| seaslog.buffer_disabled_in_cli | 0 | `INI_SYSTEM` |  |
| seaslog.disting_type | 0 | `INI_SYSTEM` |  |
| seaslog.disting_folder | 1 | `INI_SYSTEM` |  |
| seaslog.disting_by_hour | 0 | `INI_SYSTEM` |  |
| seaslog.recall_depth | 0 | `INI_ALL` |  |
| seaslog.trim_wrap | 0 | `INI_ALL` |  |
| seaslog.ignore_warning | 1 | `INI_ALL` |  |
| seaslog.throw_exception | 1 | `INI_ALL` |  |

这是配置指令的简短说明。

- **`$seaslog.appender` `int`** — 日志存储介质的切换选型。1File 2TCP 3UDP (默认为1) — 当 *seaslog.appender* 被切换至 `2 (TCP)` 或 `3 (UDP)` 时， SeasLog 会将日志发送至 tcp://remote_host:remote_port 或者 udp://remote_host:remote_port 服务器。 — 当 *SeasLog* 将日志发往 TCP/UDP 时，格式遵守 RFC5424 规范。 此时 `{logInfo}` 受配置项中 *seaslog.default_template* 的影响。
  ```text

     
  The log style finally formatted such as:
  <15>1 2017-08-27T01:24:59+08:00 vagrant-ubuntu-trusty test/logger[27171]: 2016-06-25 00:59:43 | DEBUG | 21423 | 599157af4e937 | 1466787583.322 | this is a neeke debug
  <14>1 2017-08-27T01:24:59+08:00 vagrant-ubuntu-trusty test/logger[27171]: 2016-06-25 00:59:43 | INFO | 21423 | 599157af4e937 | 1466787583.323 | this is a info log
  <13>1 2017-08-27T01:24:59+08:00 vagrant-ubuntu-trusty test/logger[27171]: 2016-06-25 00:59:43 | NOTICE | 21423 | 599157af4e937 | 1466787583.324 | this is a notice log
      
       
  ```


- **`$seaslog.appender_retry` `int`** — 记录日志时的重试次数。 默认为 0 (不重试)
- **`$seaslog.buffer_disabled_in_cli` `int`** — 在 CLI 模式下是否关闭 Buffer 的选项。 1-Y 0-N(默认值) — 在配置中留有 buffer_disabled_in_cli 的开关项。 默认情况下，这个选项是关闭的。 如果将 buffer_disabled_in_cli 设为开启，并且运行在 CLI 时， 配置中的 seaslog.use_buffer 设置将是被忽略的，此时 Seaslog 将立即把日志信息写往存储介质。
- **`$seaslog.buffer_size` `int`** — 可以通过该配置项将内存中 Buffer 的条数修改为 100 条。 配置项中 buffer_size 默认值为 0， 这意味着将不使用 Buffer。 如果 buffer_size > 0，SeasLog 将预先将日志写入内存 Buffer，并在 Buffer 的条数大于或等于该值时，写往存储介质，然后刷新内存中的 Buffer。
- **`$seaslog.default_basepath` `string`** — 日志存储的默认根路径。默认值为 "/var/log/www"。
- **`$seaslog.default_datetime_format` `string`** — 时间的格式。默认值为 "Y-m-d H:i:s"。
- **`$seaslog.default_logger` `string`** — 日志记录的默认 Logger。默认值为 "default"。
- **`$seaslog.disting_by_hour` `int`** — 是否按每小时一个记录进行区分。1-Y 0-N(默认值)
  > 当 *seaslog.disting_by_hour = 1* 时，会将日志区分小时记录。 这意味着，SeasLog 将每隔一个小时创建一个文件。


- **`$seaslog.disting_folder` `int`** — 是否按目录进行区分。1-Y(默认值) 0-N
  > 当 *seaslog.disting_folder = 1* 时，按目录区分地使用 Logger。 这意味着，SeasLog 将为每一个 Logger 创建一个单独的目录进行区分，比如 default/20180211.log， 而当该选项关闭时，SeasLog 将使用下划线连接 Logger 与时间，比如 default_20180211.log。


- **`$seaslog.disting_type` `int`** — 是否按日志级别进行区分。1-Y 0-N(默认值)
  > 当 *seaslog.disting_type = 1* 时，按日志级别使用 Logger。 这意味着，SeasLog 将在创建日志文件时，使用 info/warn/error 或其他级别进行区分。


- **`$seaslog.ignore_warning` `int`** — 是否忽略 SeasLog 警告。1-On(默认值) 0-Off
  > 当 *seaslog.ignore_warning = 1* 时，忽略 SeasLog 自身的警告， 此时日志目录权限不足、或从远端 Server 端口不能正常响应等导致的警告，将被忽略； 而当关闭该选项时，警告将会出现。


- **`$seaslog.level` `int`** — 允许日志被记录的级别。默认为 8 (全部日志)。 0-EMERGENCY 1-ALERT 2-CRITICAL 3-ERROR 4-WARNING 5-NOTICE 6-INFO 7-DEBUG 8-ALL
  > 提示: 该配置项从 1.7.0 版本开始有所改变。 在 1.7.0 之前的版本中，越小的值将代表越多的级别日志被记录下来： 0-all 1-debug 2-info 3-notice 4-warning 5-error 6-critical 7-alert 8-emergency 在 1.7.0 之前的版本中，默认值是 0 (全部日志)。


- **`$seaslog.recall_depth` `int`** — 日志函数所在的层级。这将影响变量 `%F` 中的 `LineNo`。 默认值为 0。
- **`$seaslog.remote_host` `string`** — 如果要使用 TCP 或者 UDP 为存储介质，需要配置远端的 IP。默认值为 "127.0.0.1"
- **`$seaslog.remote_port` `int`** — 如果要使用 TCP 或者 UDP 为存储介质，需要配置远端服务的端口号。默认值为 514
- **`$seaslog.remote_timeout` `int`** — 如果要使用 TCP 或者 UDP 为存储介质，需要配置超时时间。默认值为 1 秒。
- **`$seaslog.throw_exception` `int`** — 是否接受 SeasLog 抛出异常。1-On(默认值) 0-Off
  > 当*seaslog.throw_exception = 1*时，接受 SeasLog 抛出自身的异常， 此时由于日志目录权限问题、或者从远端 Server 端口不能正常响应而导致的中断， 将抛出一个异常；而当关闭该选项时，将不抛出异常。


- **`$seaslog.trace_error` `int`** — 自动将 PHP 的 Final Error 记录在默认 Logger中。1-Y(默认值) 0-N
- **`$seaslog.trace_exception` `int`** — 自动将 PHP 的异常记录在默认 Logger中。1-Y 0-N(默认值)
- **`$seaslog.trace_notice` `int`** — 自动将 PHP 的 Notice 记录在默认 Logger中。1-Y 0-N(默认值)
- **`$seaslog.trace_warning` `int`** — 自动将 PHP 的 Warning 记录在默认 Logger中。1-Y 0-N(默认值)
- **`$seaslog.trim_wrap` `int`** — 自动地 Trim 掉日志信息中的 \n 和 \r。1-On 0-Off(默认值)
- **`$seaslog.use_buffer` `int`** — 开启使用内存中的日志 Buffer。1-Y 0-N(默认值)
  > 当*seaslog.use_buffer = 1*时，开启使用内存 Buffer。 默认情况下，内存 Buffer 是关闭的。 如果 Buffer 是开启状态，SeasLog 会将日志预先记录在内存中， 并且在请求结束时、或 PHP 进程结束时（PHP RSHUTGOWN 或 PHP MSHUTDOWN）时写往存储介质。


- **`$seaslog.default_template` `string`** — 默认日志模板。 默认值是 "%T | %L | %P | %Q | %t | %M".
  > 提供了一系列的默认变量，可以在日志模板中使用，并在最终日志生成时，这些变量的占位符会被替换成对应的值。
  >
  > 默认的日志模板是：`seaslog.default_template = "%T | %L | %P | %Q | %t | %M"`， 这意味着，默认的日志格式会是：`{dateTime} | {level} | {pid} | {uniqid} | {timeStamp} | {logInfo}`
  >
  > 如果修改了日志模板，比如：`seaslog.default_template = "[%T]:%L %P %Q %t %M"`， 这意味着，日志的格式将会成改变为：`[{dateTime}]:{level} {pid} {uniqid} {timeStamp} {logInfo}`
  >
  > | 变量名 | 描述 |
  > | --- | --- |
  > | %L | 日志级别。 |
  > | %M | 日志信息。 |
  > | %T | 时间。 比如：`2017-08-16 19:15:02`，受配置项 `seaslog.default_datetime_format` 的影响。 |
  > | %t | 时间戳。比如：`1502882102.862`，精确到毫秒。 |
  > | %Q | 请求ID。用于区分每一个请求， 如果没有调用 `SeasLog::setRequestId($string)` 函数， 将在请求初始化的时候，使用 PHP 内置函数 `static char *get_uniqid ()` 来生成 Unique ID。 |
  > | %H | 主机名。 |
  > | %P | 进程ID。 |
  > | %D | 域名:端口号。比如：`www.cloudwise.com:80`；在 CLI 下运行时，该值为 `cli`。 |
  > | %R | 请求 URI。比如：`/app/user/signin`。 在 CLI 下运行时，值为 Index Script 名称，比如：`CliIndex.php`。 |
  > | %m | 请求 Method。比如：`Get`。 在 CLI 下运行时，值为 Command Script，比如：`/bin/bash`。 |
  > | %I | 客户端IP；在 CLI 下运行时，值为 `local`。 取值优先级为：HTTP_X_REAL_IP > HTTP_X_FORWARDED_FOR > REMOTE_ADDR |
  > | %F | 文件名:行号。比如：`UserService.php:118`。 |
  > | %U | 内存使用量。单位为 byte。 调用 PHP 内置方法 `zend_memory_usage` 得到该值。 |
  > | %u | 最大内存使用峰值。单位为 byte。 调用 PHP 内置方法 `zend_memory_peak_usage` 得到该值。 |
  > | %C | `TODO` Class::Action。比如 `UserService::getUserInfo` |
