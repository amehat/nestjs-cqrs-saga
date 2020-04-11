import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { ProductWasAddedEvent } from '../product-was-added.event';
import { Logger } from '@nestjs/common';

@EventsHandler(ProductWasAddedEvent)
export class ProductWasAddedHandlerEvent implements IEventHandler<ProductWasAddedEvent> {
    handle(event: ProductWasAddedEvent) {
        Logger.log('ProductWasAddedHandlerEvent called');
        return event;
    }
}
