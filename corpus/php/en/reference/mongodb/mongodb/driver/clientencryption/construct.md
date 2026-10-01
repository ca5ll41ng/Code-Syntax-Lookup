---
id: "en-php-function-mongodb-driver-clientencryption-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ClientEncryption::__construct"
title: "Create a new ClientEncryption object"
signature: "final public MongoDB\\Driver\\ClientEncryption::__construct(array $options)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-clientencryption.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new ClientEncryption object

## Description

```php
final public MongoDB\Driver\ClientEncryption::__construct(array $options)
```

Constructs a new `MongoDB\Driver\ClientEncryption` object with the specified options.

## Parameters

- **`$options`** — | Option | Type | Description | | --- | --- | --- | | keyVaultClient | `MongoDB\Driver\Manager` | The Manager used to route data key queries. This option is required (unlike with `MongoDB\Driver\Manager::createClientEncryption()`). | | keyVaultNamespace | `string` | A fully qualified namespace (e.g. `"databaseName.collectionName"`) denoting the collection that contains all data keys used for encryption and decryption. This option is required. | | kmsProviders | `array` | A document containing the configuration for one or more KMS providers, which are used to encrypt data keys. Supported providers include `"aws"`, `"azure"`, `"gcp"`, `"kmip"`, and `"local"` and at least one must be specified. If an empty document is specified for `"aws"`, `"azure"`, or `"gcp"`, the driver will attempt to configure the provider using [Automatic Credentials](/blob/master/source/client-side-encryption/client-side-encryption.rst#automatic-credentials). The format for `"aws"` is as follows: ```javascript aws: { accessKeyId: <string>, secretAccessKey: <string>, sessionToken: <optional string> } ``` The format for `"azure"` is as follows: ```javascript azure: { tenantId: <string>, clientId: <string>, clientSecret: <string>, identityPlatformEndpoint: <optional string> // Defaults to "login.microsoftonline.com" } ``` The format for `"gcp"` is as follows: ```javascript gcp: { email: <string>, privateKey: <base64 string>\|<MongoDB\BSON\Binary>, endpoint: <optional string> // Defaults to "oauth2.googleapis.com" } ``` The format for `"kmip"` is as follows: ```javascript kmip: { endpoint: <string> } ``` The format for `"local"` is as follows: ```javascript local: { // 96-byte master key used to encrypt/decrypt data keys key: <base64 string>\|<MongoDB\BSON\Binary> } ``` | | tlsOptions | `array` | A document containing the TLS configuration for one or more KMS providers. Supported providers include `"aws"`, `"azure"`, `"gcp"`, and `"kmip"`. All providers support the following options: ```javascript <provider>: { tlsCaFile: <optional string>, tlsCertificateKeyFile: <optional string>, tlsCertificateKeyFilePassword: <optional string>, tlsDisableOCSPEndpointCheck: <optional bool> } ``` |

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\RuntimeException` if the extension was compiled without libmongocrypt support 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.16.0 | The AWS KMS provider for client-side encryption now accepts a `"sessionToken"` option, which can be used to authenticate with temporary AWS credentials.    Added `"tlsDisableOCSPEndpointCheck"` to the `"tlsOptions"` option.    If an empty document is specified for the `"azure"` or `"gcp"` KMS provider, the driver will attempt to configure the provider using [Automatic Credentials](/blob/master/source/client-side-encryption/client-side-encryption.rst#automatic-credentials). |
| PECL mongodb 1.15.0 | If an empty document is specified for the `"aws"` KMS provider, the driver will attempt to configure the provider using [Automatic Credentials](/blob/master/source/client-side-encryption/client-side-encryption.rst#automatic-credentials). |

## See Also

 `MongoDB\Driver\Manager::createClientEncryption()` [Explicit (Manual) Client-Side Field Level Encryption](core/security-explicit-client-side-encryption/) in the MongoDB manual
