---
id: "en-php-function-function-cubrid-get-server-info"
language: "php"
lang: "en"
category: "function"
name: "cubrid_get_server_info"
title: "Return the CUBRID server version"
signature: "string cubrid_get_server_info(resource $conn_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-get-server-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the CUBRID server version

## Description

```php
string cubrid_get_server_info(resource $conn_identifier)
```

This function returns a string that represents the CUBRID server version.

## Parameters

- **`$conn_identifier`** — The CUBRID connection.

## Return Values

A string that represents the CUBRID server version on success, or `false` on failure.

## Examples

**`cubrid_get_server_info()` example**

```php


<?php
printf("%-30s %s\n", "CUBRID PHP Version:", cubrid_version());

printf("\n");

$conn = cubrid_connect("localhost", 33088, "demodb");

if (!$conn) {
    die('Connect Error ('. cubrid_error_code() .')' . cubrid_error_msg());
}

$db_params = cubrid_get_db_parameter($conn);

while (list($param_name, $param_value) = each($db_params)) {
    printf("%-30s %s\n", $param_name, $param_value);
}

printf("\n");

$server_info = cubrid_get_server_info($conn);
$client_info = cubrid_get_client_info();

printf("%-30s %s\n", "Server Info:", $server_info);
printf("%-30s %s\n", "Client Info:", $client_info);

printf("\n");

$charset = cubrid_get_charset($conn);

printf("%-30s %s\n", "CUBRID Charset:", $charset);

cubrid_disconnect($conn);

?>

   
```

The above example will output:

```text


CUBRID PHP Version:            9.1.0.0001

PARAM_ISOLATION_LEVEL          3
LOCK_TIMEOUT                   -1
MAX_STRING_LENGTH              1073741823
PARAM_AUTO_COMMIT              1

Server Info:                   9.1.0.0212
Client Info:                   9.1.0

CUBRID Charset:                iso8859-1

    
```
