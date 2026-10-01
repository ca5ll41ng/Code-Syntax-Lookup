---
id: "zh-php-guide-book-yaconf"
language: "php"
lang: "zh"
category: "guide"
name: "book.yaconf"
title: "Yaconf"
module: "yaconf"
source_url: "https://www.php.net/manual/zh/book.yaconf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaconf

Yaconf

 简介  `Yet Another Configurations Container`（又一个配置容器， 简称 Yaconf）是一个配置容器。它在 PHP 启动时解析 `INI` 文件，并将解析结果常驻保存在内存中，贯穿 PHP 的整个生命周期。因此每一次读取配置都是一次快速的哈希表查找， 既没有文件 I/O，也不需要每个请求重新解析。    Yaconf 把所有配置以驻留字符串（interned string）或不可变数组的形式存储。 它们不参与引用计数，所以从 Yaconf 读取配置几乎是零拷贝的。 从 Yaconf 1.2.0 起，解析后的整棵配置树还会被进一步压缩到一块连续的 内存中，既降低了内存开销，也提升了缓存局部性。    解析后的配置保存在持久内存中，所有 PHP-FPM worker 通过写时复制 （copy-on-write）共享这份数据：只要配置文件没有变化，无论有多少个 worker，它们共享的都是同一份物理内存页。    Yaconf 支持 INI 文件中的 section（节）以及节继承。在非 ZTS 构建下， 它还会在文件变更时自动重新加载；在 ZTS（线程安全）构建下， 配置只在启动时加载一次，变更后需要重启 PHP 才能生效。    从 Yaconf 1.2.0 起，配置目录下的子目录会被递归加载（最多 16 层深）， 子目录名作为一级键参与寻址：例如 `Yaconf::get("users.database.master")` 读取的是 `users/` 子目录下 `database.ini` 文件里的 `master` 键。    把敏感配置放在 Web 目录之外，也可以缩小攻击面。如果配置文件放在 Web 根目录下，攻击者就可能拿到它们，比如通过文件泄露漏洞。 而使用 Yaconf，可以把 `.ini` 文件放在只有 root 可读的目录里，例如 `/etc/yaconf`： PHP-FPM master 进程在服务启动时加载配置，而实际处理 Web 请求的 worker 进程以普通用户身份运行，既不需要、也不会被授予对该目录的 访问权限。    Yaconf 需要 PHP 7.0 及以上版本。
