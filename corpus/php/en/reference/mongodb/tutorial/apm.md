---
id: "en-php-guide-mongodb-tutorial-apm"
language: "php"
lang: "en"
category: "guide"
name: "mongodb.tutorial.apm"
title: "Application Performance Monitoring (APM)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb.tutorial.apm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Application Performance Monitoring (APM)

The extension contains an event subscriber API, which allows applications to monitor commands and internal activity pertaining to the [Server Discovery and Monitoring Specification](). This tutorial will demonstrate command monitoring using the `MongoDB\Driver\Monitoring\CommandSubscriber` interface.

The `MongoDB\Driver\Monitoring\CommandSubscriber` interface defines three methods: `commandStarted`, `commandSucceeded`, and `commandFailed`. Each of these three methods accept a single `$event` argument of a specific class for the respective event. For example, the `commandSucceeded`'s `$event` argument is a `MongoDB\Driver\Monitoring\CommandSucceededEvent` object.

In this tutorial we will implement a subscriber that creates a list of all the query profiles and the average time they took.

## Subscriber Class Scaffolding

We start with the framework for our subscriber:

```php


<?php

class QueryTimeCollector implements \MongoDB\Driver\Monitoring\CommandSubscriber
{
    public function commandStarted( \MongoDB\Driver\Monitoring\CommandStartedEvent $event ): void
    {
    }

    public function commandSucceeded( \MongoDB\Driver\Monitoring\CommandSucceededEvent $event ): void
    {
    }

    public function commandFailed( \MongoDB\Driver\Monitoring\CommandFailedEvent $event ): void
    {
    }
}

?>

  
```

## Registering the Subscriber

Once a subscriber object is instantiated, it needs to be registered with the extensions's monitoring system. This is done by calling `MongoDB\Driver\Monitoring\addSubscriber()` or `MongoDB\Driver\Manager::addSubscriber()` to register the subscriber globally or with a specific Manager, respectively.

```php


<?php

\MongoDB\Driver\Monitoring\addSubscriber( new QueryTimeCollector() );

?>

  
```

## Implementing the Logic

With the object registered, the only thing left is to implement the logic in the subscriber class. To correlate the two events that make up a successfully executed command (commandStarted and commandSucceeded), each event object exposes a `requestId` field.

To record the average time per query shape, we will start by checking for a `find` command in the commandStarted event. We will then add an item to the `pendingCommands` property indexed by its `requestId` and with its value representing the query shape.

If we receive a corresponding commandSucceeded event with the same `requestId`, we add the duration of the event (from `durationMicros`) to the total time and increment the operation count.

If a corresponding commandFailed event is encountered, we just remove the entry from the `pendingCommands` property.

```php


<?php

class QueryTimeCollector implements \MongoDB\Driver\Monitoring\CommandSubscriber
{
    private $pendingCommands = [];
    private $queryShapeStats = [];

    /* Creates a query shape out of the filter argument. Right now it only
     * takes the top level fields into account */
    private function createQueryShape( array $filter )
    {
        return json_encode( array_keys( $filter ) );
    }

    public function commandStarted( \MongoDB\Driver\Monitoring\CommandStartedEvent $event ): void
    {
        if ( 'find' === $event->getCommandName() )
        {
            $queryShape = $this->createQueryShape( (array) $event->getCommand()->filter );
            $this->pendingCommands[$event->getRequestId()] = $queryShape;
        }
    }

    public function commandSucceeded( \MongoDB\Driver\Monitoring\CommandSucceededEvent $event ): void
    {
        $requestId = $event->getRequestId();
        if ( array_key_exists( $requestId, $this->pendingCommands ) )
        {
            $this->queryShapeStats[$this->pendingCommands[$requestId]]['count']++;
            $this->queryShapeStats[$this->pendingCommands[$requestId]]['duration'] += $event->getDurationMicros();
            unset( $this->pendingCommands[$requestId] );
        }
    }

    public function commandFailed( \MongoDB\Driver\Monitoring\CommandFailedEvent $event ): void
    {
        if ( array_key_exists( $event->getRequestId(), $this->pendingCommands ) )
        {
            unset( $this->pendingCommands[$event->getRequestId()] );
        }
    }

    public function __destruct()
    {
        foreach( $this->queryShapeStats as $shape => $stats )
        {
            echo "Shape: ", $shape, " (", $stats['count'], ")\n  ",
                $stats['duration'] / $stats['count'], "µs\n\n";
        }
    }
}

$m = new \MongoDB\Driver\Manager( 'mongodb://localhost:27016' );

/* Add the subscriber */
\MongoDB\Driver\Monitoring\addSubscriber( new QueryTimeCollector() );

/* Do a bunch of queries */
$query = new \MongoDB\Driver\Query( [
    'region_slug' => 'scotland-highlands', 'age' => [ '$gte' => 20 ]
] );
$cursor = $m->executeQuery( 'dramio.whisky', $query );

$query = new \MongoDB\Driver\Query( [
    'region_slug' => 'scotland-lowlands', 'age' => [ '$gte' => 15 ]
] );
$cursor = $m->executeQuery( 'dramio.whisky', $query );

$query = new \MongoDB\Driver\Query( [ 'region_slug' => 'scotland-lowlands' ] );
$cursor = $m->executeQuery( 'dramio.whisky', $query );

?>

  
```
