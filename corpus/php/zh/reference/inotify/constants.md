---
id: "zh-php-guide-inotify-constants"
language: "php"
lang: "zh"
category: "guide"
name: "inotify.constants"
title: "预定义常量"
module: "inotify"
source_url: "https://www.php.net/manual/zh/inotify.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`IN_ACCESS` (`int`)** — 文件被访问（读）（*）
- **`IN_MODIFY` (`int`)** — 文件被修改（*）
- **`IN_ATTRIB` (`int`)** — 元数据变更（例如：权限、修改时间等）（*）
- **`IN_CLOSE_WRITE` (`int`)** — 打开写入后关闭的文件（*）
- **`IN_CLOSE_NOWRITE` (`int`)** — 未打开写入的文件被关闭（*）
- **`IN_OPEN` (`int`)** — 文件被打开（*）
- **`IN_MOVED_TO` (`int`)** — 文件被移动到监听目录（*）
- **`IN_MOVED_FROM` (`int`)** — 文件移出监听目录（*）
- **`IN_CREATE` (`int`)** — 在监听目录中创建文件或文件夹（*）
- **`IN_DELETE` (`int`)** — 监听目录中删除文件或文件夹（*）
- **`IN_DELETE_SELF` (`int`)** — 监听的文件或目录被删除
- **`IN_MOVE_SELF` (`int`)** — 监听的文件或目录被移动
- **`IN_CLOSE` (`int`)** — 与 IN_CLOSE_WRITE | IN_CLOSE_NOWRITE 相等
- **`IN_MOVE` (`int`)** — 与 IN_MOVED_FROM | IN_MOVED_TO 相等
- **`IN_ALL_EVENTS` (`int`)** — 以上所有常量的位掩码
- **`IN_UNMOUNT` (`int`)** — 卸载包含监听对象的文件系统
- **`IN_Q_OVERFLOW` (`int`)** — 事件队列溢出（此事件中监听描述符是 -1）
- **`IN_IGNORED` (`int`)** — 监听被移除（通过 `inotify_rm_watch()` 显示移除，或者是文件被移动，或者文件系统被卸载）
- **`IN_ISDIR` (`int`)** — 事件发生的主体是目录
- **`IN_ONLYDIR` (`int`)** — 如果是目录，仅监听路径名（从 Linux 2.6.15 开始）
- **`IN_DONT_FOLLOW` (`int`)** — 如果是符号链接，不引用路径名（从 Linux 2.6.15 开始）
- **`IN_MASK_ADD` (`int`)** — 如果路径名存在，追加监听此路径的事件掩码（代替更换掩码）
- **`IN_ONESHOT` (`int`)** — 路径触发一个监听事件后，从监听列表中移除。

> 以上标有星号 (*) 的事件可能发生在已监听目录的文件中。
