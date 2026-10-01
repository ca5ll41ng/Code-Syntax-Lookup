---
id: "zh-php-guide-oauth-constants"
language: "php"
lang: "zh"
category: "guide"
name: "oauth.constants"
title: "预定义常量"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

这些常量牵涉到的大部分问题也都在官方的 OAuth [问题报告]() 文档里有描述。但是要注意，这些常量名是特定于 PHP 的，尽管这些命名规则看上去相似。

- **`OAUTH_SIG_METHOD_RSASHA1` (`string`)** — OAuth *RSA-SHA1* 签名方法。
- **`OAUTH_SIG_METHOD_HMACSHA1` (`string`)** — OAuth *HMAC-SHA1* 签名方法。
- **`OAUTH_SIG_METHOD_HMACSHA256` (`string`)** — OAuth *HMAC-SHA256* 签名方法。
- **`OAUTH_AUTH_TYPE_AUTHORIZATION` (`string`)** — 此常量代表把 OAuth 参数放在 `Authorization` 头部。
- **`OAUTH_AUTH_TYPE_NONE` (`string`)** — 此常量标志着一个 NoAuth OAuth 请求。
- **`OAUTH_AUTH_TYPE_URI` (`string`)** — 此常量表示将 OAuth 参数放在请求中。 URI.
- **`OAUTH_AUTH_TYPE_FORM` (`string`)** — 此常量表示将 OAuth 参数作为 HTTP POST 主体的一部分。
- **`OAUTH_HTTP_METHOD_GET` (`string`)** — 为 OAuth 请求使用 *GET* 方法。
- **`OAUTH_HTTP_METHOD_POST` (`string`)** — 为 OAuth 请求使用 *POST* 方法。
- **`OAUTH_HTTP_METHOD_PUT` (`string`)** — 为 OAuth 请求使用 *PUT* 方法。
- **`OAUTH_HTTP_METHOD_HEAD` (`string`)** — 为 OAuth 请求使用 *HEAD* 方法。
- **`OAUTH_HTTP_METHOD_DELETE` (`string`)** — 为 OAuth 请求使用 *DELETE* 方法。
- **`OAUTH_REQENGINE_STREAMS` (`int`)** — 使用 `OAuth::setRequestEngine()` 来设置引擎为 PHP 流，与用 `OAUTH_REQENGINE_CURL` 的 Curl 截然相反。
- **`OAUTH_REQENGINE_CURL` (`int`)** — 使用 `OAuth::setRequestEngine()` 来设置引擎为 Curl，与用 `OAUTH_REQENGINE_STREAMS` 的 PHP 流 截然相反。
- **`OAUTH_OK` (`int`)** — 一切良好。
- **`OAUTH_BAD_NONCE` (`int`)** — *oauth_nonce* 值已经用于上一个上一个请求，因此现在不能使用了。
- **`OAUTH_BAD_TIMESTAMP` (`int`)** — *oauth_timestamp* 值不能被服务提供者接受。这种情况下，响应应该也包含 *oauth_acceptable_timestamps* 参数。
- **`OAUTH_CONSUMER_KEY_UNKNOWN` (`int`)** — *oauth_consumer_key* 暂时不能被服务提供者接受。比如，服务提供者限流了使用者。
- **`OAUTH_CONSUMER_KEY_REFUSED` (`int`)** — 使用者密钥遭拒绝。
- **`OAUTH_INVALID_SIGNATURE` (`int`)** — *oauth_signature* 无效，因为和服务提供者的签名计算不匹配。
- **`OAUTH_TOKEN_USED` (`int`)** — *oauth_token* 已经被消费。此令牌不能再被使用，因为在上一次请求中已经使用过。
- **`OAUTH_TOKEN_EXPIRED` (`int`)** — *oauth_token* 已经过期。
- **`OAUTH_TOKEN_REVOKED` (`int`)** — *oauth_token* 已经被撤销，且将决不再接受。
- **`OAUTH_TOKEN_REJECTED` (`int`)** — *oauth_token* 被服务提供者拒绝。原因未知，也许是因为令牌从未发布、已经消费、过期、或服务提供者忘记了。
- **`OAUTH_VERIFIER_INVALID` (`int`)** — *oauth_verifier* 不正确。
- **`OAUTH_PARAMETER_ABSENT` (`int`)** — 一个必需的参数没有接收到。这种情况下，响应也应该包含 *oauth_parameters_absent* 参数。
- **`OAUTH_SIGNATURE_METHOD_REJECTED` (`int`)** — *oauth_signature_method* 不能被服务提供者接受。
