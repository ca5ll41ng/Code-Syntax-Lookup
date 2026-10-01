---
id: "zh-php-guide-fpm-status"
language: "php"
lang: "zh"
category: "guide"
name: "fpm.status"
title: "状态页面"
module: "fpm"
source_url: "https://www.php.net/manual/zh/fpm.status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 状态页面

此页面提供 FPM 状态页面的设置和内容的相关信息。请参见 `fpm_get_status()`。

### 配置

可以在 FPM poll 配置中设置 pm.status_path 配置参数来启用 FPM 状态页面。

> 为了安全，FPM 状态页面应仅限于内部请求或已知客户端 IP，因为该页面会显示请求 URL 和可用资源的有关信息。

取决于 Web 服务器配置，可能需要配置 Web 服务器允许绕过任何 PHP 脚本，直接请求该路径。Apache 在 UDS 上监听 FPM 并且 `pm.status_path` 设置为 `/fpm-status` 的配置示例看起来就像是这样：

 
```apache-conf

    
<LocationMatch "/fpm-status">
 Require local
 ProxyPass "unix:/var/run/php-fpm.sock|fcgi://localhost/"
</LocationMatch>

   
```

 

重载/重启 FPM 和 Web 服务器后，可以从浏览器访问状态页面（如果配置了 IP 限制，请求只能来自允许的 IP）。

### 查询参数

可以指定以下某一查询参数来更改状态页面输出的格式：

 `html` `json` `openmetrics` `xml` 

也可以使用 `full` 查询参数返回附加信息。

状态页面 URL 示例：

  `https://localhost/fpm-status` ——默认文本格式的简短输出   `https://localhost/fpm-status?full` ——默认文本格式的完整输出   `https://localhost/fpm-status?json` ——JSON 格式的简短输出   `https://localhost/fpm-status?html&full` ——HTML 格式的完整输出  

### 显示信息

日期/时间值在 JSON/XML 输出中使用 unix 时间戳格式，否则将生成以下示例日期 `"03/Jun/2021:07:21:46 +0100"`。

| 参数 | 说明 |
| --- | --- |
| pool | FPM 进程池的名称。 |
| proccess manager | 进程管理器类型——static、dynamic 或 ondemand。 |
| start time | 进程池最后一次启动的日期/时间。 |
| start since | 进程自启动以来的秒数。 |
| accepted conn | 服务的请求总数 |
| listen queue | 当前等待空闲进程的请求（backlog）总数。 |
| max listen queue | 监听队列在任一时间看到的最大请求数。 |
| listen queue len | 监听队列的最大允许数量。 |
| idle processes | 当前空闲（等待请求）的进程数。 |
| active processes | 当前正在处理请求的进程数。 |
| total processes | 当前进程总数。 |
| max active processes | 并发活动进程的最大数量。 |
| max children reached | 是否达到了最大进程数？如果是，则显示值大于或等于 `1`，否则为 `0`。 |
| slow requests | 达到配置 `request_slowlog_timeout` 的请求总数。 |
| memory peak | FPM 启动以来的内存使用峰值。 |

| 参数 | 说明 |
| --- | --- |
| pid | 进程的系统 PID。 |
| state | 进程状态——空闲、运行…… |
| start time | 进程开始的日期/时间。 |
| start since | 进程自启动以来的秒数。 |
| requests | 最大服务请求数。 |
| request duration | 最后一次服务请求所花费的总时间（以微秒为单位）。 |
| request method | 最后服务请求的 HTTP 方法。 |
| request uri | 最后服务请求的 URI（在 Web 服务器处理后，如果使用前端控制器模式重定向，将始终是 `/index.php`）。 |
| content length | 最后一个请求的请求正文长度，以字节为单位。 |
| user | 最后一个请求的 HTTP 用户（`PHP_AUTH_USER`）。 |
| script | 最后一个请求执行的执行脚本的完整路径。如果不适用（比如状态页面请求），将是 `'-'`。 |
| last request cpu | 最后一个请求的 %cpu。如果进程不空闲，将为 0，因为计算是在请求处理完成时计算的。该值可以超过 100%，因为指标将告诉最后一个请求使用了总 cpu 时间的百分比——考虑所有内核上的进程，而 100% 仅适用于一个内核。 |
| last request memory | 最后一个请求消耗的最大内存量。如果进程不空闲，将为 0，因为进程是在请求处理完成时进行计算的。 |

> 当 FPM 重启时，重置所有池指定的值。

> openMetrics 格式输出使用不同的参数类型以便更好的适应 OpenMetrics 格式。参数和值的说明包含在 OpenMetrics 格式输出中。

### 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 新增 openmetrics 格式。 |
