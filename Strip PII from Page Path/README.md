# Strip Page Path from PII
Remove all Personal Identifiable Information (PII) from Google Analytics

## 1. Variable
Copy & paste the code from [custom-js-variable.js](https://github.com/Conversionista/google-tag-manager-snippets/blob/master/Strip%20PII%20from%20Page%20Path/custom-js-variable.js)
Save as `Page Path - Stripped from PII`


## 2. Tag
_Universal Analytics_ :arrow_right: _More Setting_ :arrow_right: _Fields to Set_


| Field Name | Value                               |
| ---------- | ----------------------------------- |
| `page`     | `{{Page Path - Stripped from PII}}` |


### 2.1 Trigger
Should be used with the usual _page view_ tirgger
