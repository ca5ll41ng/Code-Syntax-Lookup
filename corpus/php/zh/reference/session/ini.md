---
id: "zh-php-guide-session-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "session.configuration"
title: "运行时配置"
module: "session"
source_url: "https://www.php.net/manual/zh/session.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| session.save_path | "" | `INI_ALL` |  |
| session.name | "PHPSESSID" | `INI_ALL` |  |
| session.save_handler | "files" | `INI_ALL` |  |
| session.auto_start | "0" | `INI_PERDIR` |  |
| session.gc_probability | "1" | `INI_ALL` |  |
| session.gc_divisor | "100" | `INI_ALL` |  |
| session.gc_maxlifetime | "1440" | `INI_ALL` |  |
| session.serialize_handler | "php" | `INI_ALL` |  |
| session.cookie_lifetime | "0" | `INI_ALL` |  |
| session.cookie_path | "/" | `INI_ALL` |  |
| session.cookie_domain | "" | `INI_ALL` |  |
| session.cookie_secure | "0" | `INI_ALL` | 在 PHP 7.2.0 之前，默认值是 `""`。 |
| session.cookie_httponly | "0" | `INI_ALL` | 在 PHP 7.2.0 之前，默认值是 `""`。 |
| session.cookie_samesite | "" | `INI_ALL` | 自 PHP 7.3.0 起有效 |
| session.use_strict_mode | "0" | `INI_ALL` | 自 PHP 5.5.2 起有效 |
| session.use_cookies | "1" | `INI_ALL` |  |
| session.use_only_cookies | "1" | `INI_ALL` |  |
| session.referer_check | "" | `INI_ALL` |  |
| session.cache_limiter | "nocache" | `INI_ALL` |  |
| session.cache_expire | "180" | `INI_ALL` |  |
| session.use_trans_sid | "0" | `INI_ALL` |  |
| session.trans_sid_tags | "a=href,area=href,frame=src,form=" | `INI_ALL` | 自 PHP 7.1.0 起有效。 |
| session.trans_sid_hosts | `$_SERVER['HTTP_HOST']` | `INI_ALL` | 自 PHP 7.1.0 起有效。 |
| session.sid_length | "32" | `INI_ALL` | 自 PHP 7.1.0 起有效。自 PHP 8.4.0 起已废弃。 |
| session.sid_bits_per_character | "4" | `INI_ALL` | 自 PHP 7.1.0 起有效。自 PHP 8.4.0 起已废弃。 |
| session.upload_progress.enabled | "1" | `INI_PERDIR` |  |
| session.upload_progress.cleanup | "1" | `INI_PERDIR` |  |
| session.upload_progress.prefix | "upload_progress_" | `INI_PERDIR` |  |
| session.upload_progress.name | "PHP_SESSION_UPLOAD_PROGRESS" | `INI_PERDIR` |  |
| session.upload_progress.freq | "1%" | `INI_PERDIR` |  |
| session.upload_progress.min_freq | "1" | `INI_PERDIR` |  |
| session.lazy_write | "1" | `INI_ALL` |  |
| session.hash_function | "0" | `INI_ALL` | 自 PHP 7.1.0 起移除。 |
| session.hash_bits_per_character | "4" | `INI_ALL` | 自 PHP 7.1.0 起移除。 |
| session.entropy_file | "" | `INI_ALL` | 自 PHP 7.1.0 起移除。 |
| session.entropy_length | "0" | `INI_ALL` | 自 PHP 7.1.0 起移除。 |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

会话管理系统支持许多配置选项，可以在自己的 php.ini 文件中设定。这里只是个简短的概览。

- **`$session.save_handler` `string`** — `session.save_handler` 定义处理器（handler）名称，可以获取/储存关联 session 数据。 默认为 `files`。 注意不同的扩展可能会注册它们各自的 `save_handler`。 `phpinfo()` 提到的预装数据，包含了注册过的 hander。 可以参考 `session_set_save_handler()`。
- **`$session.save_path` `string`** — `session.save_path` 定义了传递给存储处理器的参数。如果选择了默认的 files 文件处理器，则此值是创建文件的路径。默认为 `/tmp`。参见 `session_save_path()`。 — 此指令还有一个可选的 `N` 参数来决定会话文件分布的目录深度。例如，设定为 `'5;/tmp'` 将使创建的会话文件和路径类似于 `/tmp/4/b/1/e/3/sess_4b1e384ad74619bd212e236e52a5a174If`。要使用 `N` 参数，必须在使用前先创建好这些目录。在 `ext/session` 目录下有个小的 shell 脚本名叫 `mod_files.sh`，windows 版本是 `mod_files.bat` 可以用来做这件事。此外注意如果使用了 `N` 参数并且大于 0，那么将不会执行自动垃圾回收，更多信息见 php.ini。另外如果用了 `N` 参数，要确保将 `session.save_path` 的值用双引号 "quotes" 括起来，因为分隔符分号（ `;`）在 php.ini 中也是注释符号。 — 文件储存模块默认使用 mode 600 创建文件。通过 修改可选参数 `MODE` 来改变这种默认行为： `N;MODE;/path` ，其中 `MODE` 是 mode 的八进制表示。 `MODE` 设置不影响进程的掩码(umask)。
  > 如果将此设定为一个全局可读的目录，例如 `/tmp`（默认值），服务器上的其他用户有可能通过该目录的文件列表破解会话。


  > 使用以上描述的可选目录层级参数 `N` 时请注意，对于绝大多数站点， 大于1或者2的值会不太合适——因为这需要创建大量的目录： 例如，值设置为 3 需要在文件系统上创建 `64^3` 个目录， 将浪费很多空间和 inode。
  >
  > 仅仅在绝对肯定站点足够大时，才可以设置 `N` 大于2。


- **`$session.name` `string`** — `session.name` 指定会话名以用做 cookie 的名字。只能由字母数字组成，默认为 `PHPSESSID`。参见 `session_name()`。
- **`$session.auto_start` `bool`** — `session.auto_start` 指定会话模块是否在请求开始时自动启动一个会话。默认为 `0`（不启动）。
- **`$session.serialize_handler` `string`** — `session.serialize_handler` 定义用来序列化／反序列化的处理器名字。 当前支持 PHP 序列化格式 (名为 `php_serialize`)、 PHP PHP 内部格式 (名为 `php` 及 `php_binary`) 和 WDDX (名为 `wddx`)。 如果 PHP 编译时加入了 WDDX 支持，则只能用 WDDX。 `php_serialize` 在内部简单地直接使用 serialize/unserialize 函数，并且不会有 `php` 和 `php_binary` 所具有的限制。 使用较旧的序列化处理器导致 $_SESSION 的索引既不能是数字也不能包含特殊字符(`|` and `!`) 。 使用 `php_serialize` 避免脚本退出时，数字及特殊字符索引导致出错。 默认使用 `php`。
- **`$session.gc_probability` `int`** — `session.gc_probability` 与 `session.gc_divisor` 合起来用来管理 gc（garbage collection 垃圾回收）进程启动的概率。默认为 `1`。 必须大于或等于 `0`。 详见 session.gc_divisor。
- **`$session.gc_divisor` `int`** — `session.gc_divisor` 与 `session.gc_probability` 合起来定义了在每个会话初始化时启动 gc（garbage collection 垃圾回收）进程的概率。此概率用 gc_probability/gc_divisor 计算得来。例如 1/100 意味着在每个请求中有 1% 的概率启动 gc 进程。`session.gc_divisor` 默认为 `100`。必须大于 `0`。
- **`$session.gc_maxlifetime` `int`** — `session.gc_maxlifetime` 指定过了多少秒之后数据就会被视为“垃圾”并被清除。 垃圾搜集可能会在 session 启动的时候开始（取决于 session.gc_probability 和 session.gc_divisor）。 默认为 `1440`（24分钟）。
  > 如果不同的脚本具有不同的 `session.gc_maxlifetime` 数值但是共享了同一个地方存储会话数据，则具有最小数值的脚本会清理数据。此情况下，与 session.save_path 一起使用本指令。


- **`$session.referer_check` `string`** — `session.referer_check` 包含有用来检查每个 HTTP Referer 的子串。如果客户端发送了 Referer 信息但是在其中并未找到该子串，则嵌入的会话 ID 会被标记为无效。默认为空字符串。
- **`$session.entropy_file` `string`** — `session.entropy_file` 给出了一个到外部资源（文件）的路径，该资源将在会话 ID 创建进程中被用作附加的熵值资源。例如在许多 Unix 系统下都可以用 `/dev/random` 或 `/dev/urandom`。 — 在 Windows 上也支持此功能。 设置 `session.entropy_length` 为非零的值将使 PHP 使用 Windows Random API 作为熵值源。
  > PHP 7.1.0 中移除。
  >
  > 在 `/dev/urandom` 或 `/dev/arandom` 可用的时候， `session.entropy_file` 默认使用它们。


- **`$session.entropy_length` `int`** — `session.entropy_length` 指定了从上面的文件中读取的字节数。默认为 `0`（禁用）。 — PHP 7.1.0 中移除。
- **`$session.use_strict_mode` `bool`** — `session.use_strict_mode` 设置是否启用严格 session id 模式。 开启此模式后，模块不会接受未初始化过的 session ID。 从浏览器端传入未初始化的 session ID 后，将会发送一个新的 session ID 给它。 通过 session 启用严格模式可固定 session 以保护应用。 默认为 `0` （禁用）。
  > 开启 `session.use_strict_mode` 是常规的 session 安全强制性措施。 建议所有站点都开启此模式。 可以参考 `session_create_id()` 例子中的代码。


  > 如果 `session_set_save_handler()` 注册的自定义 session 处理器 没有实现 `SessionUpdateTimestampHandlerInterface::validateId()`， 也没有相应提供 `$validate_sid` 回调，那么无论上述指令的值如何设置， 实际上严格 session ID 模式都是关闭状态的。 尤其需要注意*没有* 实现 `SessionHandler::validateId()` 的 `SessionHandler`。


- **`$session.use_cookies` `bool`** — `session.use_cookies` 指定是否在客户端用 cookie 来存放会话 ID。默认为 `1`（启用）。
- **`$session.use_only_cookies` `bool`** — `session.use_only_cookies` 指定是否在客户端*仅仅*使用 cookie 来存放会话 ID。启用此设定可以防止有关通过 URL 传递会话 ID 的攻击。默认值为`1`（启用）。
- **`$session.cookie_lifetime` `int`** — `session.cookie_lifetime` 以秒数指定了发送到浏览器的 cookie 的生命周期。值为 0 表示“直到关闭浏览器”。默认为 `0`。参见 `session_get_cookie_params()` 和 `session_set_cookie_params()`。
  > 过期时间是根据服务器时间设置的， 它没有必要和浏览器端的时间一致。


- **`$session.cookie_path` `string`** — `session.cookie_path` 指定了要设定会话 cookie 的路径。默认为 `/`。参见 `session_get_cookie_params()` 和 `session_set_cookie_params()`。
- **`$session.cookie_domain` `string`** — `session.cookie_domain` 指定了要设定会话 cookie 的域名。默认为无，表示根据 cookie 规范产生 cookie 的主机名。参见 `session_get_cookie_params()` 和 `session_set_cookie_params()`。
- **`$session.cookie_secure` `bool`** — `session.cookie_secure` 指定是否仅通过安全连接发送 cookie。默认为 `off`。此设定是 PHP 4.0.4 添加的。参见 `session_get_cookie_params()` 和 `session_set_cookie_params()`。
- **`$session.cookie_httponly` `bool`** — 设置 cookie 仅能够通过 HTTP 协议访问。 它意味着 cookie 无法通过类似 JavaScript 这样的脚本语言访问。 该设置可有效避免 XSS 攻击窃取身份（但并非所有浏览器都支持）。
- **`$session.cookie_samesite` `string`** — Allows servers to assert that a cookie ought not to be sent along with cross-site requests. This assertion allows user agents to mitigate the risk of cross-origin information leakage, and provides some protection against cross-site request forgery attacks. Note that this is not supported by all browsers. An empty value means that no SameSite cookie attribute will be set. `Lax` and `Strict` mean that the cookie will not be sent cross-domain for POST requests; `Lax` will send the cookie for cross-domain GET requests, while `Strict` will not.
- **`$session.cache_limiter` `string`** — `session.cache_limiter` 指定会话页面所使用的缓冲控制方法（ `none`/`nocache`/ `private`/`private_no_expire`/`public`）。默认为 `nocache`。参见 `session_cache_limiter()` 文档查看各个值的含义。
- **`$session.cache_expire` `int`** — `session.cache_expire` 以分钟数指定缓冲的会话页面的存活期，此设定对 nocache 缓冲控制方法无效。默认为 `180`。参见 `session_cache_expire()`。
- **`$session.use_trans_sid` `bool`** — `session.use_trans_sid` 指定是否启用透明 SID 支持。默认为 `0`（禁用）。
  > 基于 URL 的会话管理比基于 cookie 的会话管理有更多安全风险。例如用户有可能通过 email 将一个包含有效的会话 ID 的 URL 发给他的朋友，或者用户总是有可能在收藏夹中存有一个包含会话 ID 的 URL 来以同样的会话 ID 去访问站点。
  >
  > 自 PHP 7.1.0 开始，透明 SID 开始使用完整的 URL 绝对路径，例如 https://php.net/。 在此之前 PHP 只会使用相对路径。使用 session.trans_sid_hosts 定义重写的目标 host。


- **`$session.trans_sid_tags` `string`** — 开启支持透明 sid 时， `session.trans_sid_tags` 指定是否需要重写 HTML 标签来包含 session id。 默认为 `a=href,area=href,frame=src,input=src,form=` — `form` 是个特殊标签。 `<input hidden="session_id" name="session_name">` 作为表单变量添加。
  > PHP 7.1.0 之前，url_rewriter.tags 用于此目的。 PHP 7.1.0 之后，`fieldset` 不再作为特殊标签对待。


- **`$session.trans_sid_hosts` `string`** — 当透明 sid 支持开启时，`session.trans_sid_hosts` 设置了要重写包含 session 的主机名， 默认为 `$_SERVER['HTTP_HOST']`。 多个主机用半角逗号 "," 分隔；主机名之间不能用空格。 例如 `php.net,wiki.php.net,bugs.php.net`。
- **`$session.sid_length` `int`** — 通过 `session.sid_length` 可以设置 session ID 字符串长度。 Session ID 的长度可以是在 22 到 256 之间。 — 默认是 32。 如果需要较好的兼容性可以设置为 32、40 等。 较长的 session ID 会更难猜测。 推荐至少要 32 个字符。
  > Compatibility Note: Use 32 instead of `session.hash_function`=0 (MD5) and `session.hash_bits_per_character`=4, `session.hash_function`=1 (SHA1) and `session.hash_bits_per_character`=6. Use 26 instead of `session.hash_function`=0 (MD5) and `session.hash_bits_per_character`=5. Use 22 instead of `session.hash_function`=0 (MD5) and `session.hash_bits_per_character`=6. 必须正确配置 INI 值，让 session ID 至少有 128 比特（bits）。 不要忘了为 `session.sid_bits_per_character` 设置合适的值；否则将会有一个较弱的 session ID。


  > PHP 7.1.0 中加入该设置。


- **`$session.sid_bits_per_character` `int`** — `session.sid_bits_per_character` 设置要编码 session ID 字符的比特数。 可能的设置有： '4'（0-9、a-f）、'5'（0-9、a-v）、'6'（0-9、a-z、A-Z、"-"、","）。 — 默认为 4。 更多的比特数会产生更强健的 session ID。 对于绝大多数环境，推荐值是 5。
  > PHP 7.1.0 中加入该设置。


- **`$session.hash_function` `mixed`** — `session.hash_function` 允许用户指定生成会话 ID 的散列算法。'0' 表示 MD5（128 位），'1' 表示 SHA-1（160 位）。 — 还可以指定 hash 扩展（开启的时候） 支持的任意算法，例如 `sha512` 或 `whirlpool`。 可通过 `hash_algos()` 函数获取支持的算法完整名单。
  > PHP 7.1.0 中已经移除。


- **`$session.hash_bits_per_character` `int`** — `session.hash_bits_per_character` 允许用户定义将二进制散列数据转换为可读的格式时每个字符存放多少个比特。可能值为 '4'（0-9，a-f），'5'（0-9，a-v），以及 '6'（0-9，a-z，A-Z，"-"，","）。
  > 这是 PHP 5 引进的。


- **`$session.upload_progress.enabled` `boolean`** — Enables upload progress tracking, populating the `$_SESSION` variable. Defaults to 1, enabled.
- **`$session.upload_progress.cleanup` `boolean`** — Cleanup the progress information as soon as all POST data has been read (i.e. upload completed). Defaults to 1, enabled.
  > It is highly recommended to keep this feature enabled.


- **`$session.upload_progress.prefix` `string`** — A prefix used for the upload progress key in the `$_SESSION`. This key will be concatenated with the value of `$_POST[ini_get("session.upload_progress.name")]` to provide a unique index. — Defaults to "upload_progress_".
- **`$session.upload_progress.name` `string`** — The name of the key to be used in `$_SESSION` storing the progress information. See also session.upload_progress.prefix. — If `$_POST[ini_get("session.upload_progress.name")]` is not passed or available, upload progressing will not be recorded. — Defaults to "PHP_SESSION_UPLOAD_PROGRESS".
- **`$session.upload_progress.freq` `mixed`** — Defines how often the upload progress information should be updated. This can be defined in bytes (i.e. "update progress information after every 100 bytes"), or in percentages (i.e. "update progress information after receiving every 1% of the whole filesize"). — Defaults to "1%".
- **`$session.upload_progress.min_freq` `int`** — The minimum delay between updates, in seconds. Defaults to "1" (one second).
- **`$session.lazy_write` `bool`** — `session.lazy_write`，设置成 1 的含义是： 只有 session 数据发生变化时才需要重新写入。默认为开启状态 1。

Upload progress will not be registered unless session.upload_progress.enabled is enabled, and the $_POST[ini_get("session.upload_progress.name")] variable is set. See Session Upload Progress for mor details on this functionality.
