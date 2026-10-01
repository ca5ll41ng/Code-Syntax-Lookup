---
id: "en-php-function-mongodb-driver-server-getinfo"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::getInfo"
title: "Returns an array of information describing this server"
signature: "final public array MongoDB\\Driver\\Server::getInfo()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.getinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array of information describing this server

## Description

```php
final public array MongoDB\Driver\Server::getInfo()
```

Returns an array of information describing the server. This array is derived from the most recent [hello](reference/command/hello/) command response obtained through [server monitoring]().

> When the driver is connected to a load balancer, this method will return the backing server's [hello](reference/command/hello/) command response from the initial connection handshake. This is in contrast to other methods (e.g. `MongoDB\Driver\Server::getType()`), which will return information about the load balancer itself.

## Parameters

This function has no parameters.

## Return Values

Returns an array of information describing this server.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Server::getInfo()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017/');

$rp = new MongoDB\Driver\ReadPreference('primary');
$server = $manager->selectServer($rp);

var_dump($server->getInfo());

?>

   
```

The above example will output something similar to:

```text


array(23) {
  ["helloOk"]=>
  bool(true)
  ["topologyVersion"]=>
  array(2) {
    ["processId"]=>
    object(MongoDB\BSON\ObjectId)#4 (1) {
      ["oid"]=>
      string(24) "617b6d696a3a89d2f77e6df0"
    }
    ["counter"]=>
    int(6)
  }
  ["hosts"]=>
  array(1) {
    [0]=>
    string(15) "localhost:27017"
  }
  ["setName"]=>
  string(3) "rs0"
  ["setVersion"]=>
  int(1)
  ["ismaster"]=>
  bool(true)
  ["secondary"]=>
  bool(false)
  ["primary"]=>
  string(15) "localhost:27017"
  ["me"]=>
  string(15) "localhost:27017"
  ["electionId"]=>
  object(MongoDB\BSON\ObjectId)#5 (1) {
    ["oid"]=>
    string(24) "7fffffff0000000000000001"
  }
  ["lastWrite"]=>
  array(4) {
    ["opTime"]=>
    array(2) {
      ["ts"]=>
      object(MongoDB\BSON\Timestamp)#6 (2) {
        ["increment"]=>
        string(1) "1"
        ["timestamp"]=>
        string(10) "1635478989"
      }
      ["t"]=>
      int(1)
    }
    ["lastWriteDate"]=>
    object(MongoDB\BSON\UTCDateTime)#7 (1) {
      ["milliseconds"]=>
      string(13) "1635478989000"
    }
    ["majorityOpTime"]=>
    array(2) {
      ["ts"]=>
      object(MongoDB\BSON\Timestamp)#8 (2) {
        ["increment"]=>
        string(1) "1"
        ["timestamp"]=>
        string(10) "1635478989"
      }
      ["t"]=>
      int(1)
    }
    ["majorityWriteDate"]=>
    object(MongoDB\BSON\UTCDateTime)#9 (1) {
      ["milliseconds"]=>
      string(13) "1635478989000"
    }
  }
  ["maxBsonObjectSize"]=>
  int(16777216)
  ["maxMessageSizeBytes"]=>
  int(48000000)
  ["maxWriteBatchSize"]=>
  int(100000)
  ["localTime"]=>
  object(MongoDB\BSON\UTCDateTime)#10 (1) {
    ["milliseconds"]=>
    string(13) "1635478992136"
  }
  ["logicalSessionTimeoutMinutes"]=>
  int(30)
  ["connectionId"]=>
  int(3)
  ["minWireVersion"]=>
  int(0)
  ["maxWireVersion"]=>
  int(13)
  ["readOnly"]=>
  bool(false)
  ["ok"]=>
  float(1)
  ["$clusterTime"]=>
  array(2) {
    ["clusterTime"]=>
    object(MongoDB\BSON\Timestamp)#11 (2) {
      ["increment"]=>
      string(1) "1"
      ["timestamp"]=>
      string(10) "1635478989"
    }
    ["signature"]=>
    array(2) {
      ["hash"]=>
      object(MongoDB\BSON\Binary)#12 (2) {
        ["data"]=>
        string(20) ""
        ["type"]=>
        int(0)
      }
      ["keyId"]=>
      int(0)
    }
  }
  ["operationTime"]=>
  object(MongoDB\BSON\Timestamp)#13 (2) {
    ["increment"]=>
    string(1) "1"
    ["timestamp"]=>
    string(10) "1635478989"
  }
}

   
```

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.11.0 | When the driver is connected to a load balancer, this method returns the backing server's `hello` command response from the initial connection handshake. |

## See Also

 `MongoDB\Driver\ServerDescription::getHelloResponse()` [hello](reference/command/hello/) command in the MongoDB manual [Server Discovery and Monitoring Specification]()
