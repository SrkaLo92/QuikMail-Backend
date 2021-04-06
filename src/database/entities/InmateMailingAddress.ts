import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { InmateContact } from './InmateContact';

@Entity()
export class InmateMailingAddress {
    constructor(order: number, mailingAddress: string, inmateContact?: InmateContact) {
        this.inmateContact = inmateContact;
        this.order = order;
        this.mailingAddress = mailingAddress;
    }

    @ManyToOne(() => InmateContact, { primary: true })
    inmateContact: InmateContact;

    @Property({ primary: true })
    order: number;

    @Property()
    mailingAddress: string;
}
