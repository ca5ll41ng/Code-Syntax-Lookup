---
id: "en-php-function-mongodb-driver-manager-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::__construct"
title: "Create new MongoDB Manager"
signature: "final public MongoDB\\Driver\\Manager::__construct(string|null $uri = null, array|null $uriOptions = null, array|null $driverOptions = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create new MongoDB Manager

## Description

```php
final public MongoDB\Driver\Manager::__construct(string|null $uri = null, array|null $uriOptions = null, array|null $driverOptions = null)
```

Constructs a new `MongoDB\Driver\Manager` object with the specified options.

> Per the [Server Discovery and Monitoring Specification](#single-threaded-client-construction), this constructor performs no I/O. Connections will be initialized on demand, when the first operation is executed.

> When specifying any SSL or TLS URI options via the connection string or `$uriOptions` parameter, the extension will implicitly enable TLS for its connections. To avoid this, either explicitly disable the `tls` option or don't specify any TLS options.

> On Unix platforms, the extension is sensitive to scripts that use the fork() system call without also calling exec(). Users are advised not to re-use `MongoDB\Driver\Manager` instances in a forked child process.

## Parameters

- **`$uri`** — A [mongodb://](reference/connection-string/) connection URI:
  ```txt


  mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[defaultAuthDb][?options]]

       
  ```

 — Defaults to `"mongodb://127.0.0.1:27017"` if unspecified. — For details on supported URI options, see [Connection String Options](reference/connection-string/#connections-connection-options) in the MongoDB manual. [Connection pool options](reference/connection-string/#connection-pool-options) are not supported, as the extension does not implement connection pools. — The `$uri` is a URL, hence any special characters in its components need to be URL encoded according to [RFC 3986](3986). This is particularly relevant to the username and password, which can often include special characters such as `@`, `:`, or `%`. When connecting via a Unix domain socket, the socket path may contain special characters such as slashes and must be encoded. The `rawurlencode()` function may be used to encode constituent parts of the URI. — The `defaultAuthDb` component may be used to specify the database name associated with the user's credentials; however the `authSource` URI option will take priority if specified. If neither `defaultAuthDb` nor `authSource` are specified, the `admin` database will be used by default. The `defaultAuthDb` component has no effect in the absence of user credentials.
- **`$uriOptions`** — Additional [connection string options](reference/connection-string/#connections-connection-options), which will overwrite any options with the same name in the `$uri` parameter. — | Option | Type | Description | | --- | --- | --- | | appname | `string` | MongoDB 3.4+ has the ability to annotate connections with metadata provided by the connecting client. This metadata is included in the server's logs upon establishing a connection and also recorded in slow query logs when database profiling is enabled. This option may be used to specify an application name, which will be included in the metadata. The value cannot exceed 128 characters in length. | | authMechanism | `string` | The authentication mechanism that MongoDB will use to authenticate the connection. For additional details and a list of supported values, see [Authentication Options](reference/connection-string/#urioption.authMechanism) in the MongoDB manual. | | authMechanismProperties | `array` | Properties for the selected authentication mechanism. For additional details and a list of supported properties, see the [Driver Authentication Specification](/blob/master/source/auth/auth.rst#auth-related-options). > When not specified in the URI string, this option is expressed as an array of key/value pairs. The keys and values in this array should be strings. | | authSource | `string` | The database name associated with the user's credentials. Defaults to the database component of the connection URI, or the `admin` database if both are unspecified. For authentication mechanisms that delegate credential storage to other services (e.g. GSSAPI), this should be `"$external"`. | | compressors | `string` | A prioritized, comma-delimited list of compressors that the client wants to use. Messages are only compressed if the client and server share any compressors in common, and the compressor used in each direction will depend on the individual configuration of the server or driver. See the [Driver Compression Specification](/blob/master/source/compression/OP_COMPRESSED.rst#compressors) for more information. | | connectTimeoutMS | `int` | The time in milliseconds to attempt a connection before timing out. Defaults to 10,000 milliseconds. | | directConnection | `bool` | This option can be used to control replica set discovery behavior when only a single host is provided in the connection string. By default, providing a single member in the connection string will establish a direct connection or discover additional members depending on whether the `"replicaSet"` URI option is omitted or present, respectively. Specify `false` to force discovery to occur (if `"replicaSet"` is omitted) or specify `true` to force a direct connection (if `"replicaSet"` is present). | | enableOverloadRetargeting | `bool` | When set to `true` it forces server selection after a `SystemOverloadedError`. Defaults to `false`. | | heartbeatFrequencyMS | `int` | Specifies the interval in milliseconds between the driver's checks of the MongoDB topology, counted from the end of the previous check until the beginning of the next one. Defaults to 60,000 milliseconds. Per the [Server Discovery and Monitoring Specification](#heartbeatfrequencyms), this value cannot be less than 500 milliseconds. | | journal | `bool` | Corresponds to the default write concern's `$journal` parameter. If `true`, writes will require acknowledgement from MongoDB that the operation has been written to the journal. For details, see `MongoDB\Driver\WriteConcern`. | | loadBalanced | `bool` | Specifies whether the driver is connecting to a MongoDB cluster through a load balancer. If `true`, the driver may only connect to a single host (specified by either the connection string or SRV lookup), the `"directConnection"` URI option cannot be `true`, and the `"replicaSet"` URI option must be omitted. Defaults to `false`. | | localThresholdMS | `int` | The size in milliseconds of the latency window for selecting among multiple suitable MongoDB instances while resolving a read preference. Defaults to 15 milliseconds. | | maxAdaptiveRetries | `int` | This option can be used to change the maximum number of retries when a `SystemOverloadedError` occurs. Must be a positive integer; defaults to `2`. | | maxStalenessSeconds | `int` | Corresponds to the read preference's `"maxStalenessSeconds"`. Specifies, in seconds, how stale a secondary can be before the client stops using it for read operations. By default, there is no maximum staleness and clients will not consider a secondary’s lag when choosing where to direct a read operation. For details, see `MongoDB\Driver\ReadPreference`. If specified, the max staleness must be a signed 32-bit integer greater than or equal to `MongoDB\Driver\ReadPreference::SMALLEST_MAX_STALENESS_SECONDS` (i.e. 90 seconds). | | password | `string` | The password for the user being authenticated. This option is useful if the password contains special characters, which would otherwise need to be URL encoded for the connection URI. | | readConcernLevel | `string` | Corresponds to the read concern's `$level` parameter. Specifies the level of read isolation. For details, see `MongoDB\Driver\ReadConcern`. | | readPreference | `string` | Corresponds to the read preference's `$mode` parameter. Defaults to `"primary"`. For details, see `MongoDB\Driver\ReadPreference`. | | readPreferenceTags | `array` | Corresponds to the read preference's `$tagSets` parameter. Tag sets allow you to target read operations to specific members of a replica set. For details, see `MongoDB\Driver\ReadPreference`. > When not specified in the URI string, this option is expressed as an array consistent with the format expected by `MongoDB\Driver\ReadPreference::__construct()`. | | replicaSet | `string` | Specifies the name of the replica set. | | retryReads | `bool` | Specifies whether or not the driver should automatically retry certain read operations that fail due to transient network errors or replica set elections. This functionality requires MongoDB 3.6+. Defaults to `true`. See the [Retryable Reads Specification](/blob/master/source/retryable-reads/retryable-reads.rst) for more information. | | retryWrites | `bool` | Specifies whether or not the driver should automatically retry certain write operations that fail due to transient network errors or replica set elections. This functionality requires MongoDB 3.6+. Defaults to `true`. See [Retryable Writes](core/retryable-writes/) in the MongoDB manual for more information. | | serverSelectionTimeoutMS | `int` | Specifies how long in milliseconds to block for server selection before throwing an exception. Defaults to 30,000 milliseconds. | | serverSelectionTryOnce | `bool` | When `true`, instructs the driver to scan the MongoDB deployment exactly once after server selection fails and then either select a server or raise an error. When `false`, the driver blocks and searches for a server up to the `"serverSelectionTimeoutMS"` value. Defaults to `true`. | | socketCheckIntervalMS | `int` | If a socket has not been used recently, the driver must check it via a `hello` command before using it for any operation. Defaults to 5,000 milliseconds. | | socketTimeoutMS | `int` | The time in milliseconds to attempt a send or receive on a socket before timing out. Defaults to 300,000 milliseconds (i.e. five minutes). | | srvMaxHosts | `int` | The maximum number of SRV results to randomly select when initially populating the seedlist or, during SRV polling, adding new hosts to the topology. Defaults to `0` (i.e. no maximum). | | srvServiceName | `string` | The service name to use for SRV lookup in initial DNS seedlist discovery and SRV polling. Defaults to `"mongodb"`. | | tls | `bool` | Initiates the connection with TLS/SSL if `true`. Defaults to `false`. | | tlsAllowInvalidCertificates | `bool` | Specifies whether or not the driver should error when the server's TLS certificate is invalid. Defaults to `false`. > Disabling certificate validation creates a vulnerability. | | tlsAllowInvalidHostnames | `bool` | Specifies whether or not the driver should error when there is a mismatch between the server's hostname and the hostname specified by the TLS certificate. Defaults to `false`. > Disabling certificate validation creates a vulnerability. Allowing invalid hostnames may expose the driver to a [man-in-the-middle attack](). | | tlsCAFile | `string` | Path to file with either a single or bundle of certificate authorities to be considered trusted when making a TLS connection. The system certificate store will be used by default. | | tlsCertificateKeyFile | `string` | Path to the client certificate file or the client private key file; in the case that they both are needed, the files should be concatenated. | | tlsCertificateKeyFilePassword | `string` | Password to decrypt the client private key (i.e. `"tlsCertificateKeyFile"` URI option) to be used for TLS connections. | | tlsDisableCertificateRevocationCheck | `bool` | If `true`, the driver will not attempt to check certificate revocation status (e.g. OCSP, CRL). Defaults to `false`. | | tlsDisableOCSPEndpointCheck | `bool` | If `true`, the driver will not attempt to contact an OCSP responder endpoint if needed (i.e. an OCSP response is not stapled). Defaults to `false`. | | tlsInsecure | `bool` | Relax TLS constraints as much as possible. Specifying `true` for this option has the same effect as specifying `true` for both the `"tlsAllowInvalidCertificates"` and `"tlsAllowInvalidHostnames"` URI options. Defaults to `false`. > Disabling certificate validation creates a vulnerability. Allowing invalid hostnames may expose the driver to a [man-in-the-middle attack](). | | username | `string` | The username for the user being authenticated. This option is useful if the username contains special characters, which would otherwise need to be URL encoded for the connection URI. | | w | `int\|string` | Corresponds to the default write concern's `$w` parameter. For details, see `MongoDB\Driver\WriteConcern`. | | wTimeoutMS | `int\|string` | Corresponds to the default write concern's `$wtimeout` parameter. Specifies a time limit, in milliseconds, for the write concern. For details, see `MongoDB\Driver\WriteConcern`. If specified, `wTimeoutMS` must be a signed 32-bit integer greater than or equal to zero. | | zlibCompressionLevel | `int` | Specifies the compression level to use for the zlib compressor. This option has no effect if `zlib` is not included in the `"compressors"` URI option. See the [Driver Compression Specification](/blob/master/source/compression/OP_COMPRESSED.rst#zlibcompressionlevel) for more information. |
- **`$driverOptions`** — | Option | Type | Description | | --- | --- | --- | | autoEncryption | `array` | Provides options to enable automatic client-side field level encryption. The list of options is described in the table below. > Automatic encryption is an enterprise-only feature that only applies to operations on a collection. Automatic encryption is not supported for operations on a database or view, and operations that are not bypassed will result in error (see [libmongocrypt: Auto Encryption Allow-List]()). To bypass automatic encryption for all operations, set `bypassAutoEncryption` to `true`. > > Automatic encryption requires the authenticated user to have the [listCollections](reference/command/listCollections/#required-access) privilege action. > > Explicit encryption/decryption and automatic decryption is a community feature. The driver can still automatically decrypt when `bypassAutoEncryption` is `true`. | | ca_dir | `string` | Path to a correctly hashed certificate directory. The system certificate store will be used by default. | | crl_file | `string` | Path to a certificate revocation list file. | | disableClientPersistence | `bool` | If `true`, this Manager will use a new libmongoc client, which will not be persisted or shared with other Manager objects. When this Manager object is freed, its client will be destroyed and any connections will be closed. Defaults to `false`. > Disabling client persistence is not generally recommended. | | driver | `array` | Allows a higher level library to append its own metadata to the server handshake. By default, the extension submits its own name, version, and platform (i.e. PHP version) in the handshake. Strings can be specified for the `"name"`, `"version"`, and `"platform"` keys of this array, and will be appended to the respective field(s) in the handshake document. > Handshake information is limited to 512 bytes. The extension will truncate handshake data to fit within this 512-byte string. Higher level libraries are encouraged to keep their own metadata concise. | | serverApi | `MongoDB\Driver\ServerApi` | This option is used to declare a server API version for the manager. If omitted, no API version is declared. | — Options supported by automatic encryption through the `autoEncryption` driver option: | Option | Type | Description | | --- | --- | --- | | keyVaultClient | `MongoDB\Driver\Manager` | The Manager used to route data key queries to a separate MongoDB cluster. By default, the current Manager and cluster is used. | | keyVaultNamespace | `string` | A fully qualified namespace (e.g. `"databaseName.collectionName"`) denoting the collection that contains all data keys used for encryption and decryption. This option is required. | | kmsProviders | `array` | A document containing the configuration for one or more KMS providers, which are used to encrypt data keys. Supported providers include `"aws"`, `"azure"`, `"gcp"`, `"kmip"`, and `"local"` and at least one must be specified. If an empty document is specified for `"aws"`, `"azure"`, or `"gcp"`, the driver will attempt to configure the provider using [Automatic Credentials](/blob/master/source/client-side-encryption/client-side-encryption.rst#automatic-credentials). The format for `"aws"` is as follows: ```javascript aws: { accessKeyId: <string>, secretAccessKey: <string>, sessionToken: <optional string> } ``` The format for `"azure"` is as follows: ```javascript azure: { tenantId: <string>, clientId: <string>, clientSecret: <string>, identityPlatformEndpoint: <optional string> // Defaults to "login.microsoftonline.com" } ``` The format for `"gcp"` is as follows: ```javascript gcp: { email: <string>, privateKey: <base64 string>\|<MongoDB\BSON\Binary>, endpoint: <optional string> // Defaults to "oauth2.googleapis.com" } ``` The format for `"kmip"` is as follows: ```javascript kmip: { endpoint: <string> } ``` The format for `"local"` is as follows: ```javascript local: { // 96-byte master key used to encrypt/decrypt data keys key: <base64 string>\|<MongoDB\BSON\Binary> } ``` | | tlsOptions | `array` | A document containing the TLS configuration for one or more KMS providers. Supported providers include `"aws"`, `"azure"`, `"gcp"`, and `"kmip"`. All providers support the following options: ```javascript <provider>: { tlsCaFile: <optional string>, tlsCertificateKeyFile: <optional string>, tlsCertificateKeyFilePassword: <optional string>, tlsDisableOCSPEndpointCheck: <optional bool> } ``` | | schemaMap | `array\|object` | Map of collection namespaces to a local JSON schema. This is used to configure automatic encryption. See [Automatic Encryption Rules](reference/security-client-side-automatic-json-schema/) in the MongoDB manual for more information. It is an error to specify a collection in both `schemaMap` and `encryptedFieldsMap`. > Supplying a `schemaMap` provides more security than relying on JSON schemas obtained from the server. It protects against a malicious server advertising a false JSON schema, which could trick the client into sending unencrypted data that should be encrypted. > Schemas supplied in the `schemaMap` only apply to configuring automatic encryption for client side encryption. Other validation rules in the JSON schema will not be enforced by the driver and will result in an error. | | bypassAutoEncryption | `bool` | If `true`, `mongocryptd` will not be spawned automatically. This is used to disable automatic encryption. Defaults to `false`. | | bypassQueryAnalysis | `bool` | If `true`, automatic analysis of outgoing commands will be disabled and `mongocryptd` will not be spawned automatically. This enables the use case of explicit encryption for querying indexed fields without requiring the enterprise licensed `crypt_shared` library or `mongocryptd` process. Defaults to `false`. | | encryptedFieldsMap | `array\|object` | Map of collection namespaces to an `encryptedFields` document. This is used to configure queryable encryption. See [Field Encryption and Queryability](core/queryable-encryption/fundamentals/encrypt-and-query/) in the MongoDB manual for more information. It is an error to specify a collection in both `encryptedFieldsMap` and `schemaMap`. > Supplying an `encryptedFieldsMap` provides more security than relying on an `encryptedFields` obtained from the server. It protects against a malicious server advertising a false `encryptedFields`. | | extraOptions | `array` | The `extraOptions` relate to the `mongocryptd` process. The following options are supported: `mongocryptdURI` (`string`): URI to connect to an existing `mongocryptd` process. Defaults to `"mongodb://localhost:27020"`. `mongocryptdBypassSpawn` (`bool`): If `true`, prevent the driver from spawning `mongocryptd`. Defaults to `false`. `mongocryptdSpawnPath` (`string`): Absolute path to search for `mongocryptd` binary. Defaults to empty string and consults system paths. `mongocryptdSpawnArgs` (`array`): Array of string arguments to pass to `mongocryptd` when spawning. Defaults to `["--idleShutdownTimeoutSecs=60"]`. `cryptSharedLibPath` (`string`): Absolute path to `crypt_shared` shared library. Defaults to empty string and consults system paths. `cryptSharedLibRequired` (`bool`): If `true`, require the driver to load `crypt_shared`. Defaults to `false`. See the [Client-Side Encryption Specification](/blob/master/source/client-side-encryption/client-side-encryption.rst#extraoptions) for more information. | > Automatic encryption is an enterprise only feature that only applies to operations on a collection. Automatic encryption is not supported for operations on a database or view, and operations that are not bypassed will result in error. To bypass automatic encryption for all operations, set `bypassAutoEncryption=true` in `autoEncryption`. For more information on allowed operations, see the [Client-Side Encryption Specification](/blob/master/source/client-side-encryption/client-side-encryption.rst#libmongocrypt-auto-encryption-whitelist).

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\RuntimeException` if the `$uri` format is invalid 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | The `"canonicalizeHostname"` URI option was removed. Use the `"CANONICALIZE_HOST_NAME"` property of the `"authMechanismProperties"` URI option instead.    The `"gssapiServiceName"` URI option was removed. Use the `"SERVICE_NAME"` property of the `"authMechanismProperties"` URI option instead.    The `"safe"` URI option was removed. Use the `"w"` and `"wTimeoutMS"` URI options instead.    The `"ssl"` URI option was removed. Use the `"tls"` URI option instead.    The `"allow_invalid_hostname"` driver option was removed. Use the `"tlsAllowInvalidHostnames"` URI option instead.    The `"ca_file"` driver option was removed. Use the `"tlsCAFile"` URI option instead.    The `"context"` driver option was removed. All context options were deprecated in favor of the various URI options related to TLS.    The `"pem_file"` driver option was removed. Use the `"tlsCertificateKeyFile"` URI option instead.    The `"pem_pwd"` driver option was removed. Use the `"tlsCertificateKeyFilePassword"` URI option instead.    The `"weak_cert_validation"` driver option was removed. Use the `"tlsAllowInvalidCertificates"` URI option instead. |
| PECL mongodb 1.16.0 | The AWS KMS provider for client-side encryption now accepts a `"sessionToken"` option, which can be used to authenticate with temporary AWS credentials.    Added `"tlsDisableOCSPEndpointCheck"` to the `"tlsOptions"` field of the `"autoEncryption"` driver option.    If an empty document is specified for the `"azure"` or `"gcp"` KMS provider, the driver will attempt to configure the provider using [Automatic Credentials](/blob/master/source/client-side-encryption/client-side-encryption.rst#automatic-credentials). |
| PECL mongodb 1.15.0 | If an empty document is specified for the `"aws"` KMS provider, the driver will attempt to configure the provider using [Automatic Credentials](/blob/master/source/client-side-encryption/client-side-encryption.rst#automatic-credentials). |
| PECL mongodb 1.14.0 | Added the `"bypassQueryAnalysis"` and `"encryptedFieldsMap"` auto encryption options. Additional options pertaining to `crypt_shared` are now supported in the `"extraOptions"` auto encryption option. |
| PECL mongodb 1.13.0 | Added the `"srvMaxHosts"` and `"srvServiceName"` URI options. |
| PECL mongodb 1.12.0 | KMIP is now supported as a KMS provider for client-side encryption and may be configured in the `"kmsProviders"` field of the `"autoEncryption"` driver option. Additionally, TLS options for KMS providers may now be configured in the `"tlsOptions"` field of the `"autoEncryption"` driver option. |
| PECL mongodb 1.11.0 | Added the `"loadBalanced"` URI option. |
| PECL mongodb 1.10.0 | Added the `"disableClientPersistence"` driver option.    Azure and GCP are now supported as KMS providers for client-side encryption and may be configured in the `"kmsProviders"` field of the `"autoEncryption"` driver option. Base64-encoded strings are now accepted as an alternative to `MongoDB\BSON\Binary` for options within `"kmsProviders"`. |
| PECL mongodb 1.8.0 | Added the `"directConnection"`, `"tlsDisableCertificateRevocationCheck"`, and `"tlsDisableOCSPEndpointCheck"` URI options.    Added the `"driver"` driver option. |
| PECL mongodb 1.7.0 | Added the `"autoEncryption"` driver option.    Specifying any SSL or TLS option via the `$driverOptions` parameter will now implicitly enable TLS, as is done for the corresponding URI options. |
| PECL mongodb 1.6.0 | Added the `"retryReads"`, `"tls"`, `"tlsAllowInvalidCertificates"`, `"tlsAllowInvalidHostnames"`, `"tlsCAFile"`, `"tlsCertificateKeyFile"`, `"tlsCertificateKeyFilePassword"`, and `"tlsInsecure"` URI options.    The `"retryWrites"` URI option defaults to `true`.    Specifying any SSL or TLS URI option via the connection string or `$uriOptions` parameter will now implicitly enable TLS unless `ssl` or `tls` is `false`. TLS is *not* implicitly enabled for any options in the `$driverOptions` parameter, which is unchanged from previous versions. |
| PECL mongodb 1.5.0 | `"wtimeoutMS"` is now always validated and applied to the write concern. Previously, the option was ignored if `"w"` was <= 1, since the timeout only applies to replication. |
| PECL mongodb 1.4.0 | Added the `"compressors"`, `"retryWrites"`, and `"zlibCompressionLevel"` URI options. |
| PECL mongodb 1.3.0 | The `$uriOptions` argument now accepts `"authMechanism"` and `"authMechanismProperties"` options. Previously, these options were only supported in the `$uri` argument. |
| PECL mongodb 1.2.0 | The `$uri` argument defaults to `"mongodb://127.0.0.1/"`. The default port remains `27017`.    Added the `"appname"` URI option.    Added the `"allow_invalid_hostname"`, `"ca_file"`, `"ca_dir"`, `"clr_file"`, `"pem_file"`, `"pem_pwd"`, and `"weak_cert_validation"` driver options.    The PHP Streams API is no longer used for socket communication. The `"connectTimeoutMS"` URI option now defaults to 10 seconds instead of default_socket_timeout in previous versions. Additionally, the extension no longer supports all SSL context options via the `"context"` driver option. |
| PECL mongodb 1.1.0 | The `$uri` argument is optional and defaults to `"mongodb://localhost:27017/"`. |

## Examples

**`MongoDB\Driver\Manager::__construct()` basic examples**

Connecting to standalone MongoDB node:

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://example.com:27017");

?>

   
```

Connecting to standalone MongoDB node via a Unix domain socket. The socket path may include special characters such as slashes and should be encoded with `rawurlencode()`.

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://" . rawurlencode("/tmp/mongodb-27017.sock"));

?>

   
```

Connecting to a replica set:

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSet=myReplicaSet");

?>

   
```

Connecting to a sharded cluster (i.e. one or more mongos instances):

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://mongos1.example.com,mongos2.example.com/");

?>

   
```

Connecting to MongoDB with authentication credentials for a particular user and database:

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://myusername:mypassword@example.com/?authSource=databaseName");

?>

   
```

Connecting to MongoDB with authentication credentials for a particular user and database, where the username or password includes special characters (e.g. `@`, `:`, `%`). In the following example, the password string `myp@ss:w%rd` has been manually escaped; however, `rawurlencode()` may also be used to escape URI components that may contain special characters.

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://myusername:myp%40ss%3Aw%25rd@example.com/?authSource=databaseName");

?>

   
```

Connecting to MongoDB with X509 authentication:

```php


<?php

$manager = new MongoDB\Driver\Manager(
    "mongodb://example.com/?ssl=true&authMechanism=MONGODB-X509",
    [],
    [
        "pem_file" => "/path/to/client.pem",
    ]
);
?>

   
```

## See Also

 Connection handling and persistence [MongoDB Connection String Format](reference/connection-string/)
