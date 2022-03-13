import {render, RenderPosition} from './utils/render.js';
import TripTabsView from './view/trip-tabs-view.js';
import TripFiltersView from './view/trip-filters-view.js';
import TripSortView from './view/trip-sort-view.js';
import EventsListView from './view/events-list-view.js';
import EventAddView from './view/event-add-view.js';
import EventEditView from './view/event-edit-view';
import EventItemView from './view/event-item-view.js';
import {generateTripEvent} from './mock/trip-event';
import NoTripEventsView from './view/no-trip-events-view';

const TRIP_EVENTS_COUNT = 10;

const tripEvents = Array.from({length: TRIP_EVENTS_COUNT}, generateTripEvent);

const tripControlsNavigationElement = document.querySelector('.trip-controls__navigation');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const tripEventsListElement = new EventsListView();

render(tripControlsNavigationElement, new TripTabsView().element, RenderPosition.BEFOREEND);
render(tripControlsFiltersElement, new TripFiltersView().element, RenderPosition.BEFOREEND);

if (tripEvents.length === 0) {
  render(tripEventsElement, new NoTripEventsView().element, RenderPosition.BEFOREEND);
} else {
  render(tripEventsElement, tripEventsListElement.element, RenderPosition.BEFOREEND);
  render(tripEventsElement, new TripSortView().element, RenderPosition.AFTERBEGIN);
  render(tripEventsListElement.element, new EventAddView(tripEvents[0]).element, RenderPosition.BEFOREEND);
}

const renderTripEvent = (tripEventListElement, tripEvent) => {
  const eventItemComponent = new EventItemView(tripEvent);
  const eventEditComponent = new EventEditView(tripEvent);

  const replaceItemToForm = () => {
    tripEventListElement.replaceChild(eventEditComponent.element, eventItemComponent.element);
  };
  const replaceFormToItem = () => {
    tripEventListElement.replaceChild(eventItemComponent.element, eventEditComponent.element);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToItem();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  eventItemComponent.setEditClickHandler(() => {
    replaceItemToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  eventEditComponent.setRollupClickHandler(() => {
    replaceFormToItem();
    document.addEventListener('keydown', onEscKeyDown);
  });

  eventEditComponent.setFormSubmit(() => {
    replaceFormToItem();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(tripEventListElement, eventItemComponent.element, RenderPosition.BEFOREEND);
};

for (let i = 1; i < TRIP_EVENTS_COUNT; i++) {
  renderTripEvent(tripEventsListElement.element, tripEvents[i]);
}
