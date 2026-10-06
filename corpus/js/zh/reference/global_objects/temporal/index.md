---
id: "js-zh-syntax-web-javascript-reference-global_objects-temporal"
language: "js"
lang: "zh"
category: "syntax"
name: "Temporal"
title: "Temporal"
module: "reference\\global_objects\\temporal\\index.md"
source_url: "https://developer.mozilla.org/zh-cn/docs/Web/JavaScript/Reference/Global_Objects/Temporal"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Temporal

**`Temporal`** 对象支持在各种场景下管理日期和时间，包括内置的时区和日历表示、墙钟时间转换、运算、格式化等功能。它被设计为 `Date` 对象的完全替代方案。

## 描述

与大多数全局对象不同，`Temporal` 不是构造函数。你不能将其与 [`new` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)一起使用，也不能将 `Temporal` 对象作为函数调用。`Temporal` 的所有属性和方法都是静态的（正如 `Math` 对象）。

`Temporal` 有着复杂且强大的 API。它通过多个类暴露了超过 200 个实用方法，因此可能显得非常复杂。我们将提供一个高层次的概览，阐述这些 API 之间的关系。

### 背景和概念

JavaScript 在一开始就有 `Date` 对象来处理日期和时间。但是，`Date` API 的设计基于 Java 中的设计欠佳的 `java.util.Date` 类，而该类在 2010 年代初就已被替代；但是，出于 JavaScript 向后兼容的目标，`Date` 仍然保留在这门语言中。

在整个介绍开始之前，需要强调的是：**日期处理是复杂的**。`Date` 的大多数问题可以通过增加更多方法来修复，但这始终存在一个根本性的设计缺陷：它在同一个对象上暴露了过多的方法，导致开发者因常常不清楚该使用哪一个而踩到意想不到的坑。一个精心设计的 API 不仅需要能完成更多任务，还应在每一抽象层中承担*更少*职责，因为避免误用与支持更多使用场景是同样重要的。

`Date` 对象同时承担着两种角色：

- 作为[时间戳](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)：表示自一个固定时间点（称为*纪元*）以来经过的毫秒数或纳秒数。
- 作为[日期组件](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#日期组件和时区)的组合体：年、月、日、时、分、秒、毫秒、纳秒。年、月、日这些标识只有在参照某种*日历系统*时才有意义。当与某个时区关联时，整个组合体会映射到历史中的一个唯一时间点。`Date` 对象提供了用于读取和修改这些组件的方法。

[时区](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#时区和偏移量)是大量与日期相关漏洞的根源。当通过“分量组合体”模型与 `Date` 交互时，时间只能处于两个时区之一：UTC 时区和本地（设备）时区，并且无法指定任意时区。此外还缺少“无时区”的概念：无时区被称为*日历日期*（对应日期）或*墙钟时间*（对应时间），即你“从日历或时钟上看到的”的时间。例如，如果你在设置每天的起床闹钟时，不管时下是否处于夏令时，也不管你是否旅行至不同的时区等情况，你都会希望它始终设为“上午 8:00”。

`Date` 还缺少的第二个特性是[日历系统](#日历)。大多数人可能熟悉公历（格里高利历），它有公元前（BC）和公元后（AD）两个纪元；有 12 个月；每个月的天数不同；每 4 年有一个闰年等等。然而，当你使用其他日历系统，比如希伯来日历、中国农历、日本日历等等，一些公历的概念就可能不适用了。使用 `Date` 时，你只能采用公历模型。

`Date` 还有许多不理想的历史遗留问题，例如所有 setter 都可变（这常常导致不必要的副作用），[日期时间字符串格式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#日期时间字符串格式)无法以一致的方式解析等等。最终，最佳解决方案是重新构建一个 API，而这正是 `Temporal`。

### API 概览

`Temporal` 是一个与 `Intl` 类似的命名空间，包括若干类和命名空间，每个类和命名空间都旨在处理日期与时间管理的某个特定方面。类可以被归为以下几组：

- 表示某时间长度（两个时间点之间的差值）：`Temporal.Duration`
- 表示某个时间点：
  - 表示历史中的一个唯一瞬间：
    - 作为时间戳：`Temporal.Instant`
    - 作为与时区配对的日期时间分量组合体：`Temporal.ZonedDateTime`
  - 表示不含时区的日期/时间（均以“Plain”为前缀）：
    - 日期（年、月、日）+ 时间（时、分、秒、毫秒、微秒、纳秒）：`Temporal.PlainDateTime`（注：`ZonedDateTime` 等同于 `PlainDateTime` 加上某个时区）
      - 日期（年、月、日）：`Temporal.PlainDate`
        - 年、月：`Temporal.PlainYearMonth`
        - 月、日：`Temporal.PlainMonthDay`
      - 时间（时、分、秒、毫秒、微秒、纳秒）：`Temporal.PlainTime`

此外，还有另一个实用命名空间 `Temporal.Now`，提供以不同格式获取当前时间的方法。

### 共享的类接口

`Temporal` 命名空间中包含许多类，但它们共享很多相似的方法。下表列出了每个类的所有方法（不包括[类之间的转换方法](#类之间的转换)）：

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>构造函数</th>
<td>`Temporal/Instant/Instant`<br>`Temporal/Instant/from`<br>{{jsxref("Temporal/Instant/fromEpochMilliseconds", "Instant.fromEpochMilliseconds()")}}<br>`Temporal/Instant/fromEpochNanoseconds`</td>
<td>`Temporal/ZonedDateTime/ZonedDateTime`<br>`Temporal/ZonedDateTime/from`</td>
<td>`Temporal/PlainDateTime/PlainDateTime`<br>`Temporal/PlainDateTime/from`</td>
<td>`Temporal/PlainDate/PlainDate`<br>`Temporal/PlainDate/from`</td>
<td>`Temporal/PlainTime/PlainTime`<br>`Temporal/PlainTime/from`</td>
<td>`Temporal/PlainYearMonth/PlainYearMonth`<br>`Temporal/PlainYearMonth/from`</td>
<td>`Temporal/PlainMonthDay/PlainMonthDay`<br>`Temporal/PlainMonthDay/from`</td>
</tr>
<tr>
<th>更新器</th>
<td>N/A</td>
<td>`Temporal/ZonedDateTime/with`<br>`Temporal/ZonedDateTime/withCalendar`<br>`Temporal/ZonedDateTime/withTimeZone`<br>`Temporal/ZonedDateTime/withPlainTime`</td>
<td>`Temporal/PlainDateTime/with`<br>`Temporal/PlainDateTime/withCalendar`<br>`Temporal/PlainDateTime/withPlainTime`</td>
<td>`Temporal/PlainDate/with`<br>`Temporal/PlainDate/withCalendar`</td>
<td>`Temporal/PlainTime/with`</td>
<td>`Temporal/PlainYearMonth/with`</td>
<td>`Temporal/PlainMonthDay/with`</td>
</tr>
<tr>
<th>运算</th>
<td>`Temporal/Instant/add`<br>`Temporal/Instant/subtract`<br>`Temporal/Instant/since`<br>`Temporal/Instant/until`</td>
<td>`Temporal/ZonedDateTime/add`<br>`Temporal/ZonedDateTime/subtract`<br>`Temporal/ZonedDateTime/since`<br>`Temporal/ZonedDateTime/until`</td>
<td>`Temporal/PlainDateTime/add`<br>`Temporal/PlainDateTime/subtract`<br>`Temporal/PlainDateTime/since`<br>`Temporal/PlainDateTime/until`</td>
<td>`Temporal/PlainDate/add`<br>`Temporal/PlainDate/subtract`<br>`Temporal/PlainDate/since`<br>`Temporal/PlainDate/until`</td>
<td>`Temporal/PlainTime/add`<br>`Temporal/PlainTime/subtract`<br>`Temporal/PlainTime/since`<br>`Temporal/PlainTime/until`</td>
<td>`Temporal/PlainYearMonth/add`<br>`Temporal/PlainYearMonth/subtract`<br>`Temporal/PlainYearMonth/since`<br>`Temporal/PlainYearMonth/until`</td>
<td>N/A</td>
</tr>
<tr>
<th>舍入</th>
<td>`Temporal/Instant/round`</td>
<td>`Temporal/ZonedDateTime/round`</td>
<td>`Temporal/PlainDateTime/round`</td>
<td>N/A</td>
<td>`Temporal/PlainTime/round`</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>比较</th>
<td>`Temporal/Instant/equals`<br>`Temporal/Instant/compare`</td>
<td>`Temporal/ZonedDateTime/equals`<br>`Temporal/ZonedDateTime/compare`</td>
<td>`Temporal/PlainDateTime/equals`<br>`Temporal/PlainDateTime/compare`</td>
<td>`Temporal/PlainDate/equals`<br>`Temporal/PlainDate/compare`</td>
<td>`Temporal/PlainTime/equals`<br>`Temporal/PlainTime/compare`</td>
<td>`Temporal/PlainYearMonth/equals`<br>`Temporal/PlainYearMonth/compare`</td>
<td>`Temporal/PlainMonthDay/equals`</td>
</tr>
<tr>
<th>序列化</th>
<td>`Temporal/Instant/toJSON`<br>`Temporal/Instant/toLocaleString`<br>`Temporal/Instant/toString`<br>`Temporal/Instant/valueOf`</td>
<td>`Temporal/ZonedDateTime/toJSON`<br>`Temporal/ZonedDateTime/toLocaleString`<br>`Temporal/ZonedDateTime/toString`<br>`Temporal/ZonedDateTime/valueOf`</td>
<td>`Temporal/PlainDateTime/toJSON`<br>`Temporal/PlainDateTime/toLocaleString`<br>`Temporal/PlainDateTime/toString`<br>`Temporal/PlainDateTime/valueOf`</td>
<td>`Temporal/PlainDate/toJSON`<br>`Temporal/PlainDate/toLocaleString`<br>`Temporal/PlainDate/toString`<br>`Temporal/PlainDate/valueOf`</td>
<td>`Temporal/PlainTime/toJSON`<br>`Temporal/PlainTime/toLocaleString`<br>`Temporal/PlainTime/toString`<br>`Temporal/PlainTime/valueOf`</td>
<td>`Temporal/PlainYearMonth/toJSON`<br>`Temporal/PlainYearMonth/toLocaleString`<br>`Temporal/PlainYearMonth/toString`<br>`Temporal/PlainYearMonth/valueOf`</td>
<td>`Temporal/PlainMonthDay/toJSON`<br>`Temporal/PlainMonthDay/toLocaleString`<br>`Temporal/PlainMonthDay/toString`<br>`Temporal/PlainMonthDay/valueOf`</td>
</tr>
</tbody>
</table>

下表总结了每个类可用的属性，让你了解每个类能表示哪些信息。

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>日历</th>
<td>N/A</td>
<td>`Temporal/ZonedDateTime/calendarId`</td>
<td>`Temporal/PlainDateTime/calendarId`</td>
<td>`Temporal/PlainDate/calendarId`</td>
<td>N/A</td>
<td>`Temporal/PlainYearMonth/calendarId`</td>
<td>`Temporal/PlainMonthDay/calendarId`</td>
</tr>
<tr>
<th>年份相关</th>
<td>N/A</td>
<td>`Temporal/ZonedDateTime/era`<br>`Temporal/ZonedDateTime/eraYear`<br>`Temporal/ZonedDateTime/year`<br>`Temporal/ZonedDateTime/inLeapYear`<br>`Temporal/ZonedDateTime/monthsInYear`<br>`Temporal/ZonedDateTime/daysInYear`</td>
<td>`Temporal/PlainDateTime/era`<br>`Temporal/PlainDateTime/eraYear`<br>`Temporal/PlainDateTime/year`<br>`Temporal/PlainDateTime/inLeapYear`<br>`Temporal/PlainDateTime/monthsInYear`<br>`Temporal/PlainDateTime/daysInYear`</td>
<td>`Temporal/PlainDate/era`<br>`Temporal/PlainDate/eraYear`<br>`Temporal/PlainDate/year`<br>`Temporal/PlainDate/inLeapYear`<br>`Temporal/PlainDate/monthsInYear`<br>`Temporal/PlainDate/daysInYear`</td>
<td>N/A</td>
<td>`Temporal/PlainYearMonth/era`<br>`Temporal/PlainYearMonth/eraYear`<br>`Temporal/PlainYearMonth/year`<br>`Temporal/PlainYearMonth/inLeapYear`<br>`Temporal/PlainYearMonth/monthsInYear`<br>`Temporal/PlainYearMonth/daysInYear`</td>
<td>N/A</td>
</tr>
<tr>
<th>月份相关</th>
<td>N/A</td>
<td>`Temporal/ZonedDateTime/month`<br>`Temporal/ZonedDateTime/monthCode`<br>`Temporal/ZonedDateTime/daysInMonth`</td>
<td>`Temporal/PlainDateTime/month`<br>`Temporal/PlainDateTime/monthCode`<br>`Temporal/PlainDateTime/daysInMonth`</td>
<td>`Temporal/PlainDate/month`<br>`Temporal/PlainDate/monthCode`<br>`Temporal/PlainDate/daysInMonth`</td>
<td>N/A</td>
<td>`Temporal/PlainYearMonth/month`<br>`Temporal/PlainYearMonth/monthCode`<br>`Temporal/PlainYearMonth/daysInMonth`</td>
<td>`Temporal/PlainMonthDay/monthCode`</td>
</tr>
<tr>
<th>星期相关</th>
<td>N/A</td>
<td>`Temporal/ZonedDateTime/weekOfYear`<br>`Temporal/ZonedDateTime/yearOfWeek`<br>`Temporal/ZonedDateTime/daysInWeek`</td>
<td>`Temporal/PlainDateTime/weekOfYear`<br>`Temporal/PlainDateTime/yearOfWeek`<br>`Temporal/PlainDateTime/daysInWeek`</td>
<td>`Temporal/PlainDate/weekOfYear`<br>`Temporal/PlainDate/yearOfWeek`<br>`Temporal/PlainDate/daysInWeek`</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>日相关</th>
<td>N/A</td>
<td>`Temporal/ZonedDateTime/day`<br>`Temporal/ZonedDateTime/dayOfWeek`<br>`Temporal/ZonedDateTime/dayOfYear`</td>
<td>`Temporal/PlainDateTime/day`<br>`Temporal/PlainDateTime/dayOfWeek`<br>`Temporal/PlainDateTime/dayOfYear`</td>
<td>`Temporal/PlainDate/day`<br>`Temporal/PlainDate/dayOfWeek`<br>`Temporal/PlainDate/dayOfYear`</td>
<td>N/A</td>
<td>N/A</td>
<td>`Temporal/PlainMonthDay/day`</td>
</tr>
<tr>
<th>时间组件</th>
<td>N/A</td>
<td>`Temporal/ZonedDateTime/hour`<br>`Temporal/ZonedDateTime/minute`<br>`Temporal/ZonedDateTime/second`<br>`Temporal/ZonedDateTime/millisecond`<br>`Temporal/ZonedDateTime/microsecond`<br>`Temporal/ZonedDateTime/nanosecond`</td>
<td>`Temporal/PlainDateTime/hour`<br>`Temporal/PlainDateTime/minute`<br>`Temporal/PlainDateTime/second`<br>`Temporal/PlainDateTime/millisecond`<br>`Temporal/PlainDateTime/microsecond`<br>`Temporal/PlainDateTime/nanosecond`</td>
<td>N/A</td>
<td>`Temporal/PlainTime/hour`<br>`Temporal/PlainTime/minute`<br>`Temporal/PlainTime/second`<br>`Temporal/PlainTime/millisecond`<br>`Temporal/PlainTime/microsecond`<br>`Temporal/PlainTime/nanosecond`</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>时区</th>
<td>N/A</td>
<td>`Temporal/ZonedDateTime/timeZoneId`<br>`Temporal/ZonedDateTime/offset`<br>`Temporal/ZonedDateTime/offsetNanoseconds`<br>`Temporal/ZonedDateTime/hoursInDay`<br>`Temporal/ZonedDateTime/getTimeZoneTransition`<br>`Temporal/ZonedDateTime/startOfDay`</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>纪元时间</th>
<td>`Temporal/Instant/epochMilliseconds`<br>`Temporal/Instant/epochNanoseconds`</td>
<td>`Temporal/ZonedDateTime/epochMilliseconds`<br>`Temporal/ZonedDateTime/epochNanoseconds`</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

### 类之间的转换

下表总结了各类之间存在的所有转换方法。

<table>
<tbody>
<tr>
<td rowspan="2" colspan="2"></td>
<td colspan="7">转换自</td>
</tr>
<tr>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
<tr><td rowspan="7">转换为</td><th><code>Instant</code></th><td>/</td><td>`Temporal/ZonedDateTime/toInstant`</td><td colspan="5">先转换为 <code>ZonedDateTime</code></td></tr>
<tr><th><code>ZonedDateTime</code></th><td>`Temporal/Instant/toZonedDateTimeISO`</td><td>/</td><td>`Temporal/PlainDateTime/toZonedDateTime`</td><td>`Temporal/PlainDate/toZonedDateTime`</td><td>`Temporal/PlainDate/toZonedDateTime`（作为参数传入）</td><td rowspan="2" colspan="2">先转换为 <code>PlainDate</code></td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">先转换为 <code>ZonedDateTime</code></td><td>`Temporal/ZonedDateTime/toPlainDateTime`</td><td>/</td><td>`Temporal/PlainDate/toPlainDateTime`</td><td>`Temporal/PlainDate/toPlainDateTime`（作为参数传入）</td></tr>
<tr><th><code>PlainDate</code></th><td>`Temporal/ZonedDateTime/toPlainDate`</td><td>`Temporal/PlainDateTime/toPlainDate`</td><td>/</td><td>信息不重叠</td><td>`Temporal/PlainYearMonth/toPlainDate`</td><td>`Temporal/PlainMonthDay/toPlainDate`</td></tr>
<tr><th><code>PlainTime</code></th><td>`Temporal/ZonedDateTime/toPlainTime`</td><td>`Temporal/PlainDateTime/toPlainTime`</td><td>信息不重叠</td><td>/</td><td colspan="2">信息不重叠</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">先转换为 <code>PlainDate</code></td><td>`Temporal/PlainDate/toPlainYearMonth`</td><td rowspan="2">信息不重叠</td><td>/</td><td>先转换为 <code>PlainDate</code></td></tr>
<tr><th><code>PlainMonthDay</code></th><td>`Temporal/PlainDate/toPlainMonthDay`</td><td>先转换为 <code>PlainDate</code></td><td>/</td></tr>
</tbody>
</table>

通过这些表格，你应该对如何使用 `Temporal` API 有了基本认识。

### 日历

日历是一种组织日期的方法，通常按周、月、年和纪元划分时期。世界上大多数地区使用公历，但也在使用许多其他的日历，尤其是在宗教与文化背景下。默认情况下，所有与日历相关的 `Temporal` 对象都使用 ISO 8601 日历系统，该系统基于公历并定义了额外的周编号规则。[`Intl.supportedValuesOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#支持的日历类型) 列出了浏览器可能支持的大多数日历。这里我们简要概述日历系统是如何形成的，帮助你理解哪些因素可能因日历而异。

地球上有三个显著的周期性事件：绕太阳公转（一次 365.242 天）、月球绕地球公转（从一次新月到下一次新月约 29.53 天）、地球自转（从日出到日出约 24 小时）。每种文化对“一天”的衡量都是 24 小时。偶然的变化（如夏令时）不在日历范畴，而是[时区](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#时区和偏移量)信息的一部分。

- 有些日历主要以一年平均 365.242 天为基准，规定一年有 365 天，并大约每隔 4 年增加一天，即*闰日*。之后，一年会被进一步划分为“月”的部分。这些日历被称为*阳历*（solar calendar）。公历和希吉拉阳历（伊朗历）都属于阳历。
- 有些日历主要以一月平均 29.5 天为基准，规定月在 29 天和 30 天之间交替。然后 12 个月组成一年，共 354 天。这些日历被称为*阴历*（lunar calendar）。伊斯兰历是阴历。由于阴历年的长度与季节周期不相关，阴历通常更少见。
- 还有一些日历主要以月相周期定义月份，类似阴历。为了补偿与阳历年之间约 11 天的差距，它会大约每 3 年加入一个*闰月*。这些日历称为*阴阳历*（lunisolar calendar）。希伯来历和中国农历都是阴阳历。

在 `Temporal` 中，同一日历系统下的每个日期都由三个组件唯一标识：`year`、`month` 和 `day`。`year` 通常为正整数，但也可能为 0 或负数，并随时间单调递增。`year` 值为 `1`（或可能存在的 `0`）称为该日历的纪元，可由每种日历任意设定。`month` 为正整数，从 `1` 开始，每次递增 1，直到 `date.monthsInYear`，随后随着年份推进重置为 `1`。`day` 也是正整数，但不一定从 1 开始或每次递增 1，因为政治变动可能导致日期被跳过或重复。总体而言，`day` 会随月份推进而单调增加并在月切换时重置。

除了 `year` 以外，对使用纪元的日历而言，年份还可以由 `era` 与 `eraYear` 的组合唯一标识。例如，公历使用纪元“CE”和纪元前“BCE”，并且年份 `-1` 与 `{ era: "bce", eraYear: 2 }` 等价（注意所有日历都存在年份 `0`；在公历中，由于[天文计年](https://zh.wikipedia.org/wiki/天文計年)，它对应公元前 1 年）。`era` 是小写字符串，`eraYear` 是任意整数，可以为 0 或负数，甚至可能随时间递减（通常用于最早的纪元）。

> [!NOTE]
> 始终将 `era` 和 `eraYear` 成对使用；不要只用其中一个。此外，为避免冲突，在指定年份时不要把 `year` 与 `era`/`eraYear` 混用。选择一种年份表示方式并保持一致。
>
> 注意以下对年份的错误假设：
>
> - 不要假设 `era` 和 `eraYear` 总是存在；它们可能是 `undefined`。
> - 不要假设 `era` 是用户友好的字符串；而是使用 `toLocaleString()` 以格式化日期。
> - 不要假设来自不同日历的两个 `year` 值可比较；而是使用静态方法 `compare()`。
> - 不要假设一年有 365/366 天或 12 个月；而是使用 `daysInYear` 和 `monthsInYear`。
> - 不要假设闰年（`inLeapYear` 为 `true`）只多出一天；它可能会多出一个月。

除了 `month` 以外，一年中的月份还可以由 `monthCode` 唯一标识。`monthCode` 通常对应月份名称，但 `month` 不对应。例如在阴阳历中，若两个月份的 `monthCode` 相同，其中一个属于闰年而另一个不属于闰年，那么在闰月之后，它们的 `month` 值会因插入了一个额外的月份而不同。

> [!NOTE]
> 为避免冲突，在指定月份时不要混用 `month` 与 `monthCode`。选择一种月份表示方式并保持一致。如果你需要一年中月份的顺序（例如循环遍历月份）时，`month` 更有用；如果你需要月份的名称（例如用于储存生日）时，`monthCode` 更有用。
>
> 注意以下对月份的错误假设：
>
> - 不要假设 `monthCode` 与 `month` 总是对应。
> - 不要假设一个月的天数；而是使用 `daysInMonth`。
> - 不要假设 `monthCode` 是用户友好的字符串；而是使用 `toLocaleString()` 以格式化日期。
> - 通常不要把月份名称缓存到数组或对象中。即使 `monthCode` 通常对应某一日历中的月份名称，我们仍建议始终通过例如 `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })` 以计算月份名称。

除了 `day`（基于月份的索引）以外，一年中的某一天还可以由 `dayOfYear` 唯一标识。`dayOfYear` 是正整数，从 `1` 开始，每次递增 1，直到 `date.daysInYear`。

“周”的概念不关乎任何天文事件，而关乎文化建构。虽然最常见的长度是 `7` 天，但一周也可以是 4、5、6、8 或更多天——甚至没有固定天数。要获取某日期所处“周”的具体天数，使用该日期的 `daysInWeek`。`Temporal` 通过 `weekOfYear` 与 `yearOfWeek` 的组合以识别周。`weekOfYear` 是正整数，从 `1` 开始，每次递增 1，随后随着年份推进重置为 `1`。`yearOfWeek` 通常与 `year` 相同，但可能会在每年开头或结尾不同，因为一周可能跨越两个年份，而 `yearOfWeek` 会根据日历规则选择其中一个年份。

> [!NOTE]
> 始终将 `weekOfYear` 与 `yearOfWeek` 成对使用；不要混用 `weekOfYear` 与 `year`。
>
> 注意以下对“周”的错误假设：
>
> - 不要假设 `weekOfYear` 与 `yearOfWeek` 总是存在；它们可能是 `undefined`。
> - 不要假设每周总是 7 天；而是使用 `daysInWeek`。
> - 注意当前 `Temporal` API 不支持“年 - 周”日期，因此你不能用这些属性构造日期或将日期序列化为“年 - 周”表示。它们只是信息性属性。

### RFC 9557 格式

所有 `Temporal` 类都可以使用 [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) 指定的格式进行序列化和反序列化，该格式基于 [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)。完整格式如下（空格仅为方便阅读，实际字符串中不应包含空格）：

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

不同的类对每个组件是否必须存在有不同要求，因此你会在每个类的文档中看到“RFC 9557 格式”一节，说明该类可识别的格式。

这与 `Date` 使用的[日期时间字符串格式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#日期时间字符串格式)非常相似，同样基于 ISO 8601。主要的新增能力是可以指定微秒与纳秒组件，以及指定时区和日历系统。

### 可表示的日期

所有表示特定日历日期的 `Temporal` 对象都对可表示日期范围施加了类似的限制：以 Unix 纪元为中心的 ±10<sup>8</sup> 天（含边界），即从 `-271821-04-20T00:00:00` 到 `+275760-09-13T00:00:00` 的瞬间的范围。这与[有效日期](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#纪元、时间戳和无效日期)范围相同。详细规则如下：

- `Temporal.Instant` 与 `Temporal.ZonedDateTime` 会直接对其 `epochNanoseconds` 值施加该限制。
- `Temporal.PlainDateTime` 以 UTC 时区解释其日期，并要求它距离 Unix 纪元为 ±(10<sup>8</sup> + 1) 天（不含边界），因此其有效范围为 `-271821-04-19T00:00:00` 到 `+275760-09-14T00:00:00`（不含边界）。这保证任何 `ZonedDateTime` 都能转换为 `PlainDateTime`，无论其偏移量如何。
- `Temporal.PlainDate` 对该日期的正午（`12:00:00`）应用与 `PlainDateTime` 相同的检查，因此其有效范围为 `-271821-04-19` 到 `+275760-09-13`。这保证任何 `PlainDateTime` 都能转换为 `PlainDate`，无论其具体时间如何，反之亦然。
- `Temporal.PlainYearMonth` 的有效范围为 `-271821-04` 到 `+275760-09`。这保证任何 `PlainDate` 都能转换为 `PlainYearMonth`，无论其日期如何（除非非 ISO 日历月份的第一天落在 ISO 月份 `-271821-03` 中）。

`Temporal` 对象会拒绝构造超出其限制的日期/时间实例。这包括：

- 使用构造函数或 `from()` 静态方法。
- 使用 `with()` 方法更新日历字段。
- 使用 `add()`、`subtract()`、`round()` 或其他方法派发新实例。

## 静态属性

- `Temporal.Duration`
  - : 表示两个时间点之间的差值，可用于日期/时间运算。它基础表示为年、月、周、日、时、分、秒、毫秒、微秒和纳秒数值的组合。
- `Temporal.Instant`
  - : 表示时间中的一个唯一点，具有纳秒级精度。它基础表示为自 Unix 纪元（1970 年 1 月 1 日 UTC 零点）以来的纳秒数，不考虑任何时区或日历系统。
- `Temporal.Now`
  - : 提供以不同格式获取当前时间的方法。
- `Temporal.PlainDate`
  - : 表示一个日历日期（不含时间或时区的日期）；例如，日历上的一个持续一整天的事件，无论发生在哪个时区。它基础表示为一个 ISO 8601 日历日期，包含年、月、日字段，以及关联的日历系统。
- `Temporal.PlainDateTime`
  - : 表示一个不含时区的日期（日历日期）和时间（墙钟时间）。它基础表示为一个[日期](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate)（带有日历系统）与一个[时间](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime)的组合。
- `Temporal.PlainMonthDay`
  - : 表示一个日历日期的月与日，不包含年份或时区；例如，每年重复且持续一整天的日历事件。它基础表示为一个 ISO 8601 日历日期，包含年、月、日字段，以及关联的日历系统。年份用于在非 ISO 日历系统中消除“月—日”歧义。
- `Temporal.PlainTime`
  - : 表示一个不含日期或时区的时间；例如，每天在同一时间发生的重复事件。它基础表示为由时、分、秒、毫秒、微秒和纳秒值组成的组合。
- `Temporal.PlainYearMonth`
  - : 表示一个日历日期的年和月，不包含日或时区；例如，日历上持续整个月的事件。它基础表示为一个 ISO 8601 日历日期，包含年、月、日字段，以及关联的日历系统。日字段用于在非 ISO 日历系统中消除“年—月”歧义。
- `Temporal.ZonedDateTime`
  - : 表示带时区的日期与时间。它基础表示为一个[瞬间](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant)、一个时区以及一个日历系统的组合。
- `Temporal[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值是字符串 `"Temporal"`。该属性用于 `Object.prototype.toString()`。

## 规范

## 浏览器兼容性

## 参见

- `Intl.DateTimeFormat`
- `Intl.RelativeTimeFormat`
- `Intl.DurationFormat`
- [提案提起人提供的 Temporal polyfill](https://www.npmjs.com/package/@js-temporal/polyfill)
- [FullCalendar 提供的 Temporal polyfill](https://www.npmjs.com/package/temporal-polyfill)
