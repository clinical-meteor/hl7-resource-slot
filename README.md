##clinical:hl7-resource-slot

HL7 FHIR Resource - Slot


===============================
#### Conformance Statement  

The resource in this package implements the FHIR Patient Resource schema provided at  [https://www.hl7.org/fhir/slot.html](https://www.hl7.org/fhir/slot.html).  


===============================
#### Installation  

````bash
# to add hl7 resource schemas and rest routes
meteor add clinical:hl7-resource-slot

# to initialize default data
INITIALIZE=true meteor
````

===============================
#### Example   

```js
var requestedSlot = {}
Slots.insert(requestedSlot);
```

===============================
#### Extending the Schema

```js
ExtendedSlotSchema = new SimpleSchema([
  SlotSchema,
  {
    "createdAt": {
      "type": Date,
      "optional": true
    }
  }
]);
Slots.attachSchema( ExtendedSlotSchema );
```



===============================
#### Utilities  

If you're working with HL7 FHIR Resources, we recommend using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).




===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
