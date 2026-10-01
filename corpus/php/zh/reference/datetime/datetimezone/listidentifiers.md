---
id: "zh-php-function-datetimezone-listidentifiers"
language: "php"
lang: "zh"
category: "function"
name: "DateTimeZone::listIdentifiers"
aliases: ["timezone_identifiers_list"]
title: "返回包含了所有时区标识符的数字索引数组"
signature: "public static array DateTimeZone::listIdentifiers(int $timezoneGroup = DateTimeZone::ALL, string|null $countryCode = null)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetimezone.listidentifiers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回包含了所有时区标识符的数字索引数组

## 说明

面向对象风格

```php
public static array DateTimeZone::listIdentifiers(int $timezoneGroup = DateTimeZone::ALL, string|null $countryCode = null)
```

过程化风格

```php
array timezone_identifiers_list(int $timezoneGroup = DateTimeZone::ALL, string|null $countryCode = null)
```

返回 [IANA 时区标识符]()列表。

> 可通过 JavaScript 使用 [Intl.DateTimeFormat]() 或 [Temporal.ZonedDateTime]() 检测客户端（浏览器）时区。

## 参数

- **`$timezoneGroup`** — `DateTimeZone` 类中的常量之一（或组合）。
- **`$countryCode`** — 国家代码，兼容 ISO 3166-1 的两个大写字母。
  > 只有当 `$timezoneGroup` 设置为 `DateTimeZone::PER_COUNTRY` 时,该选项才会被使用。



## 返回值

返回时区标识符的数组。只会返回没有过时的元素。要获取包含过时时区标识符的所有元素，使用 `DateTimeZone::ALL_WITH_BC` 作为 `$timezoneGroup` 的值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 在此版本之前，失败时返回 `false`。 |
| 7.1.0 | 现在，`$countryCode` 可以为 null。 |

## 示例

**列出带位置注释的标识符**

```php


<?php
$identifiers = DateTimeZone::listIdentifiers(DateTimeZone::ALL);

foreach ($identifiers as $tzid) {
    $tz = new DateTimeZone($tzid);
    $comments = $tz->getLocation()['comments'];
    echo $tzid . " (" . ($comments ?: 'Whole region') . ")\n";
}

    
```

以上示例的输出类似于：

```text


America/Antigua (Whole region)
America/Araguaina (Tocantins)
America/Argentina/Buenos_Aires (Buenos Aires (BA, CF))
America/Argentina/Catamarca (Catamarca (CT), Chubut (CH))
America/Argentina/Cordoba (Argentina (most areas: CB, CC, CN, ER, FM, MN, SE, SF))
// (Output trimmed due to length)

    
```

**列出指定区域的标识符**

```php

     
<?php
$timezone_identifiers = DateTimeZone::listIdentifiers( DateTimeZone::ASIA );
for ($i=0; $i < 5; $i++) {
    echo "$timezone_identifiers[$i]\n";
}

    
```

以上示例的输出类似于：

```text

     
Asia/Aden
Asia/Almaty
Asia/Amman
Asia/Anadyr
Asia/Aqtau

    
```

**列出多个区域的标识符**

```php

     
<?php
$timezone_identifiers = DateTimeZone::listIdentifiers( DateTimeZone::ASIA | DateTimeZone::PACIFIC );
echo join( ', ', $timezone_identifiers );

    
```

以上示例的输出类似于：

```text

     
Asia/Aden, Asia/Almaty, Asia/Amman, Asia/Anadyr, Asia/Aqtau, Asia/Aqtobe,
Asia/Ashgabat, Asia/Atyrau, Asia/Baghdad, Asia/Bahrain, Asia/Baku,
Asia/Bangkok, Asia/Barnaul, Asia/Beirut, Asia/Bishkek, Asia/Brunei,
Asia/Chita, Asia/Choibalsan, Asia/Colombo, Asia/Damascus, Asia/Dhaka,
Asia/Dili, Asia/Dubai, Asia/Dushanbe, Asia/Famagusta, Asia/Gaza, Asia/Hebron,
Asia/Ho_Chi_Minh, Asia/Hong_Kong, Asia/Hovd, Asia/Irkutsk, Asia/Jakarta,
Asia/Jayapura, Asia/Jerusalem, Asia/Kabul, Asia/Kamchatka, Asia/Karachi,
Asia/Kathmandu, Asia/Khandyga, Asia/Kolkata, Asia/Krasnoyarsk,
Asia/Kuala_Lumpur, Asia/Kuching, Asia/Kuwait, Asia/Macau, Asia/Magadan,
Asia/Makassar, Asia/Manila, Asia/Muscat, Asia/Nicosia, Asia/Novokuznetsk,
Asia/Novosibirsk, Asia/Omsk, Asia/Oral, Asia/Phnom_Penh, Asia/Pontianak,
Asia/Pyongyang, Asia/Qatar, Asia/Qostanay, Asia/Qyzylorda, Asia/Riyadh,
Asia/Sakhalin, Asia/Samarkand, Asia/Seoul, Asia/Shanghai, Asia/Singapore,
Asia/Srednekolymsk, Asia/Taipei, Asia/Tashkent, Asia/Tbilisi, Asia/Tehran,
Asia/Thimphu, Asia/Tokyo, Asia/Tomsk, Asia/Ulaanbaatar, Asia/Urumqi,
Asia/Ust-Nera, Asia/Vientiane, Asia/Vladivostok, Asia/Yakutsk, Asia/Yangon,
Asia/Yekaterinburg, Asia/Yerevan, Pacific/Apia, Pacific/Auckland,
Pacific/Bougainville, Pacific/Chatham, Pacific/Chuuk, Pacific/Easter,
Pacific/Efate, Pacific/Fakaofo, Pacific/Fiji, Pacific/Funafuti,
Pacific/Galapagos, Pacific/Gambier, Pacific/Guadalcanal, Pacific/Guam,
Pacific/Honolulu, Pacific/Kanton, Pacific/Kiritimati, Pacific/Kosrae,
Pacific/Kwajalein, Pacific/Majuro, Pacific/Marquesas, Pacific/Midway,
Pacific/Nauru, Pacific/Niue, Pacific/Norfolk, Pacific/Noumea,
Pacific/Pago_Pago, Pacific/Palau, Pacific/Pitcairn, Pacific/Pohnpei,
Pacific/Port_Moresby, Pacific/Rarotonga, Pacific/Saipan, Pacific/Tahiti,
Pacific/Tarawa, Pacific/Tongatapu, Pacific/Wake, Pacific/Wallis

    
```

**列出单个国家的标识符**

```php

     
<?php
$timezone_identifiers = DateTimeZone::listIdentifiers( DateTimeZone::PER_COUNTRY, "UA" );
foreach( $timezone_identifiers as $identifier ) {
    echo "$identifier\n";
}

    
```

以上示例的输出类似于：

```text

     
Europe/Kyiv
Europe/Simferopol
Europe/Uzhgorod
Europe/Zaporozhye

    
```

## 参见

`timezone_abbreviations_list()`
