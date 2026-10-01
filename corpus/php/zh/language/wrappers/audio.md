---
id: "zh-php-function-wrappers-audio"
language: "php"
lang: "zh"
category: "function"
name: "ogg://"
title: "音频流"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.audio.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 音频流

## 说明

 {{{ 

通过包装器 `ogg://` 读取的文件， 是作为 `OGG/Vorbis` 格式的压缩音频编码。 同样，通过包装器 `ogg://` 写入或追加的数据格式也是压缩音频。 当 `stream_get_meta_data()` 用于一个打开读取的 `OGG/Vorbis` 文件时，会返回关于数据流的详细信息，包含了 `$vendor` 标签、任何内含的 `$comments`、 `$channels` 数字、采样率（`$rate`），以及 用 `$bitrate_lower`、`$bitrate_upper`、 `$bitrate_nominal` 和 `$bitrate_window` 描述的可变比特率范围。

`ogg://` （PECL）

> 该封装器默认未激活
>
> 要使用 `ogg://` 封装协议，必须从  中安装有效的 [OGG/Vorbis](oggvorbis) 扩展。

 }}} 

## 用法

 {{{ 

- `ogg://soundfile.ogg`
- `ogg:///path/to/soundfile.ogg`
- `ogg://http://www.example.com/path/to/soundstream.ogg`

 }}} 

## 可选项

 {{{ 

| 属性 | 支持 |
| --- | --- |
| 受限于 allow_url_fopen | No |
| 允许读取 | Yes |
| 允许写入 | Yes |
| 允许附加 | Yes |
| 允许同时读写 | No |
| 支持 `stat()` | No |
| 支持 `unlink()` | No |
| 支持 `rename()` | No |
| 支持 `mkdir()` | No |
| 支持 `rmdir()` | No |

 FIXME: This should not be here! context.audio... 

| 名称 | 用法 | 默认 | 模式 |
| --- | --- | --- | --- |
| `pcm_mode` | 读取时使用如下 PCM 编码之一: `OGGVORBIS_PCM_U8`、`OGGVORBIS_PCM_S8`、 `OGGVORBIS_PCM_U16_BE`、`OGGVORBIS_PCM_S16_BE`、 `OGGVORBIS_PCM_U16_LE` 和 `OGGVORBIS_PCM_S16_LE`。 (8 或 16 位，签名或未签名，大或小的 `endian`) | OGGVORBIS_PCM_S16_LE | 读取 |
| `rate` | 输入数据的采样率，单位为 Hz | 44100 | 写入/附加 |
| `bitrate` | 若给的值为整数，则是用固定的比特率进行编码。（16000 到 131072）若给的值为浮点数，则使用可变的比特率（质。(-1.0 到 1.0） | 128000 | 写入/附加 |
| `channels` | 要编码的声道的数量，典型为 1 (单声道), 或 2 (立体声)。最高支持 16 声道。 | 2 | 写入/附加 |
| `comments` | 编码到音轨头部的字符串数组。 |  | 写入/附加 |

 }}}
