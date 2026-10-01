---
id: "en-php-function-solrclient-setservlet"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::setServlet"
title: "Changes the specified servlet type to a new value"
signature: "public bool SolrClient::setServlet(int $type, string $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.setservlet.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the specified servlet type to a new value

## Description

```php
public bool SolrClient::setServlet(int $type, string $value)
```

Changes the specified servlet type to a new value

## Parameters

- **`$type`** — One of the following : — - SolrClient::SEARCH_SERVLET_TYPE - SolrClient::UPDATE_SERVLET_TYPE - SolrClient::THREADS_SERVLET_TYPE - SolrClient::PING_SERVLET_TYPE - SolrClient::TERMS_SERVLET_TYPE
- **`$value`** — The new value for the servlet

## Return Values

Returns `true` on success or `false` on failure.
