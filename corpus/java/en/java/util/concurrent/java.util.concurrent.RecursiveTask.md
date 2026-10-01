---
id: "java-en-function-java-util-concurrent-recursivetask"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.RecursiveTask"
title: "RecursiveTask"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/RecursiveTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RecursiveTask

A recursive result-bearing `ForkJoinTask`.

 

For example, here is a task-based program for computing Factorials:

 
```
 `import java.util.concurrent.RecursiveTask;
 import java.math.BigInteger;
 public class Factorial {
   static class FactorialTask extends RecursiveTask {
     private final int from, to;
     FactorialTask(int from, int to) { this.from = from; this.to = to; `
     protected BigInteger compute() {
       int range = to - from;
       if (range == 0) {                       // base case
         return BigInteger.valueOf(from);
       } else if (range == 1) {                // too small to parallelize
         return BigInteger.valueOf(from).multiply(BigInteger.valueOf(to));
       } else {                                // split in half
         int mid = from + range / 2;
         FactorialTask leftTask = new FactorialTask(from, mid);
         leftTask.fork();         // perform about half the work locally
         return new FactorialTask(mid + 1, to).compute()
                .multiply(leftTask.join());
       }
     }
   }
   static BigInteger factorial(int n) { // uses ForkJoinPool.commonPool()
     return (n <= 1) ? BigInteger.ONE : new FactorialTask(1, n).invoke();
   }
   public static void main(String[] args) {
     System.out.println(factorial(Integer.parseInt(args[0])));
   }
 }}
```

**参数**

- **the** — type of the result of the task

> *Since 1.7*
