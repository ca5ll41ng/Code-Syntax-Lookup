---
id: "python-en-function-time-strftime"
language: "python"
lang: "en"
category: "function"
name: "strftime"
signature: "strftime(format[, time_tuple])"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.strftime"
license: "PSF"
updated: "2026-10-01"
---

# strftime

Convert a tuple or `struct_time` representing a time as returned by
`gmtime` or `localtime` to a string as specified by the *format*
argument.  If *time_tuple* is not provided, the current time as returned by
`localtime` is used.  *format* must be a string.  `ValueError` is
raised if any field in *time_tuple* is outside of the allowed range.

0 is a legal argument for any position in the time tuple; if it is normally
illegal the value is forced to a correct one.

The following directives can be embedded in the *format* string. They are shown
without the optional field width and precision specification, and are replaced
by the indicated characters in the `strftime` result:

+-----------+------------------------------------------------+-------+
 Directive  Meaning                                         Notes 
+===========+================================================+=======+
 `%a`     Locale's abbreviated weekday name.                    
                                                                  
+-----------+------------------------------------------------+-------+
 `%A`     Locale's full weekday name.                           
+-----------+------------------------------------------------+-------+
 `%b`     Locale's abbreviated month name.                      
                                                                  
+-----------+------------------------------------------------+-------+
 `%B`     Locale's full month name.                             
+-----------+------------------------------------------------+-------+
 `%c`     Locale's appropriate date and time                    
            representation.                                       
+-----------+------------------------------------------------+-------+
 `%d`     Day of the month as a decimal number [01,31].         
                                                                  
+-----------+------------------------------------------------+-------+
 `%f`     Microseconds as a decimal number                \(1)  
               [000000,999999].                                   
                                                                  
+-----------+------------------------------------------------+-------+
 `%H`     Hour (24-hour clock) as a decimal number              
            [00,23].                                              
+-----------+------------------------------------------------+-------+
 `%I`     Hour (12-hour clock) as a decimal number              
            [01,12].                                              
+-----------+------------------------------------------------+-------+
 `%j`     Day of the year as a decimal number [001,366].        
                                                                  
+-----------+------------------------------------------------+-------+
 `%m`     Month as a decimal number [01,12].                    
                                                                  
+-----------+------------------------------------------------+-------+
 `%M`     Minute as a decimal number [00,59].                   
                                                                  
+-----------+------------------------------------------------+-------+
 `%p`     Locale's equivalent of either AM or PM.         \(2)  
                                                                  
+-----------+------------------------------------------------+-------+
 `%S`     Second as a decimal number [00,61].             \(3)  
                                                                  
+-----------+------------------------------------------------+-------+
 `%U`     Week number of the year (Sunday as the first    \(4)  
            day of the week) as a decimal number [00,53].         
            All days in a new year preceding the first            
            Sunday are considered to be in week 0.                
                                                                  
                                                                  
                                                                  
+-----------+------------------------------------------------+-------+
 `%u`     Day of the week (Monday is 1; Sunday is 7)            
            as a decimal number [1, 7].                           
+-----------+------------------------------------------------+-------+
 `%w`     Weekday as a decimal number [0(Sunday),6].            
                                                                  
+-----------+------------------------------------------------+-------+
 `%W`     Week number of the year (Monday as the first    \(4)  
            day of the week) as a decimal number [00,53].         
            All days in a new year preceding the first            
            Monday are considered to be in week 0.                
                                                                  
                                                                  
                                                                  
+-----------+------------------------------------------------+-------+
 `%x`     Locale's appropriate date representation.             
                                                                  
+-----------+------------------------------------------------+-------+
 `%X`     Locale's appropriate time representation.             
                                                                  
+-----------+------------------------------------------------+-------+
 `%y`     Year without century as a decimal number              
            [00,99].                                              
+-----------+------------------------------------------------+-------+
 `%Y`     Year with century as a decimal number.                
                                                                  
+-----------+------------------------------------------------+-------+
 `%z`     Time zone offset indicating a positive or             
            negative time difference from UTC/GMT of the          
            form +HHMM or -HHMM, where H represents decimal       
            hour digits and M represents decimal minute           
            digits [-23:59, +23:59]. [1]_                         
+-----------+------------------------------------------------+-------+
 `%Z`     Time zone name (no characters if no time zone         
            exists). Deprecated. [1]_                             
+-----------+------------------------------------------------+-------+
 `%G`     ISO 8601 year (similar to `%Y` but follows          
            the rules for the ISO 8601 calendar year).            
            The year starts with the week that contains           
            the first Thursday of the calendar year.              
+-----------+------------------------------------------------+-------+
 `%V`     ISO 8601 week number (as a decimal number             
            [01,53]). The first week of the year is the           
            one that contains the first Thursday of the           
            year. Weeks start on Monday.                          
+-----------+------------------------------------------------+-------+
 `%%`     A literal `'%'` character.                          
+-----------+------------------------------------------------+-------+

Notes:

(1)
    The `%f` format directive only applies to `strptime`,
    not to `strftime`. However, see also `datetime.datetime.strptime` and
    `datetime.datetime.strftime` where the `%f` format directive
    `applies to microseconds`.

(2)
   When used with the `strptime` function, the `%p` directive only affects
   the output hour field if the `%I` directive is used to parse the hour.

.. _leap-second:

(3)
   The range really is `0` to `61`; value `60` is valid in
   timestamps representing `leap seconds`_ and value `61` is supported
   for historical reasons.

(4)
   When used with the `strptime` function, `%U` and `%W` are only used in
   calculations when the day of the week and the year are specified.

Here is an example, a format for dates compatible with that specified  in the
RFC 5322 Internet email standard.  [1]_ ::

   >>> from time import gmtime, strftime
   >>> strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())
   'Thu, 28 Jun 2001 14:17:15 +0000'

Additional directives may be supported on certain platforms, but only the
ones listed here have a meaning standardized by ANSI C.  To see the full set
of format codes supported on your platform, consult the `strftime(3)`
documentation.

On some platforms, an optional field width and precision specification can
immediately follow the initial `'%'` of a directive in the following order;
this is also not portable. The field width is normally 2 except for `%j` where
it is 3.
