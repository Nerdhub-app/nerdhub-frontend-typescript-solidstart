# Custom user ability library for Authorizations

This is a custom user ability library for user authorizations in across the application.

## Usage

The goal is to create an ability object on a resource to check whether a user is allowed to perform an action on the resource.

1. First, create an `ability` directory within the feature of the resource **if not created yet**.
2. Then, create a file that has the name of the **resource** with the `ability` stereotype inside the `ability` directory. For example, `contact-message.ability.ts` for the ability applied to the **contact-message** object.

```ts
// contact-message.ability.ts
import { ContactEntity, ContactModel } from "~/features/contact/contact";
import User from "~/features/user/models/user.model";
import { AbilityBuilder, defineAbility } from "~/lib/ability";

// Define a type for the ability resource
export type ContactAbilityResource = ContactEntity | ContactModel;

// Define the ability builder
export const createContactAbility = defineAbility<User, ContactAbilityResource>(
  ({ can, cannot }, user, contact) => {
    if (user?.role === "admin") can("manage", contact);
    if (user.id === contact.requestedBy || user.id === contact.addressedTo) can("update", contact);
  },
);
```

Additionally, you can define your custom ability actions by extending the `AbilityAction` union type.

```ts
// contact-message.ability.ts
import { ContactEntity, ContactModel } from "~/features/contact/contact";
import User from "~/features/user/models/user.model";
import { AbilityBuilder, defineAbility, AbilityAction } from "~/lib/ability";

// Define a type for the ability resource
export type ContactAbilityResource = ContactEntity | ContactModel;

// Define the ability actions
export type ContactAbilityAction = AbilityAction | "update:status" | "revoke";

// Define the ability builder
export const createContactAbility = defineAbility<
  User,
  ContactAbilityResource,
  ContactAbilityAction
>(({ can, cannot }, user, contact) => {
  if (user?.role === "admin") can("manage", contact);
  if (user.id === contact.requestedBy || user.id === contact.addressedTo) can("update", contact);
  if (user.id === role.addressedTo) can("revoke", contact);
});
```

3. Now, you can use that ability builder function to create an ability object on a resource for a given user anywhere inside your code.  
   For example, let'say we want to dispay button that revokes a contact request only if the authenticated user is the one who was addressed to.

```ts
// ContactInfo.tsx
import { Show } from "solid-js";

import { useAuth } from "~/features/auth/contexts/auth";
import { ContactEntity } from "~/features/contact/contact";
import { createContactAbility } from "~/lib/ability";

type ContactInfoProps = {
  contact: ContactEntity;
}

export default function ContactInfo(props: ContactInfoProps) {
  const [authState] = useAuth();

  const abilityOnContact = createContactAbility(authState.user);

  return (
    <div>
      <Show when={abilityOnContact.can("revoke", props.contact)}>
        <button>Revoke request</button>
      </Show>
    </div>
  )
}
```
