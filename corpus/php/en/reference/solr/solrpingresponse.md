---
id: "en-php-guide-class-solrpingresponse"
language: "php"
lang: "en"
category: "guide"
name: "class.solrpingresponse"
title: "The SolrPingResponse class"
module: "solr"
source_url: "https://www.php.net/manual/en/class.solrpingresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SolrPingResponse class

SolrPingResponse

   Introduction  Represents a response to a ping request to the server      Class Synopsis   `SolrPingResponse`    `final` `SolrPingResponse`   `extends` `SolrResponse`      `const` `int` `SolrPingResponse::PARSE_SOLR_OBJ` 0   `const` `int` `SolrPingResponse::PARSE_SOLR_DOC` 1              Properties 
- **`http_status`** — The http status of the response.
- **`parser_mode`** — Whether to parse the solr documents as SolrObject or SolrDocument instances.
- **`success`** — Was there an error during the request
- **`http_status_message`** — Detailed message on http status
- **`http_request_url`** — The request URL
- **`http_raw_request_headers`** — A string of raw headers sent during the request
- **`http_raw_request`** — The raw request sent to the server
- **`http_raw_response_headers`** — Response headers from the Solr server
- **`http_raw_response`** — The response message from the server
- **`http_digested_response`** — The response in PHP serialized format.

     Predefined Constants  SolrPingResponse Class Constants 
- **`SolrPingResponse::PARSE_SOLR_OBJ`** — Documents should be parsed as SolrObject instances
- **`SolrPingResponse::PARSE_SOLR_DOC`** — Documents should be parsed as SolrDocument instances.
