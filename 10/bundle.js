/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/destinations.js":
/*!**********************************!*\
  !*** ./src/mock/destinations.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "destinations": () => (/* binding */ destinations)
/* harmony export */ });
const destinations = () => [{
  'description': 'Melbourne is the capital and most-populous city of the Australian state of Victoria, and the second-most populous city in Australia and Oceania.',
  'name': 'Melbourne',
  'pictures': [{
    'src': 'https://travel-men.ru/wp-content/uploads/2018/07/chto-posmotret-v-melburne.jpg',
    'description': 'City Melbourne'
  }, {
    'src': 'https://postila.ru/data/96/48/de/0e/9648de0e8039bdfe1819d949370e3dd9f87e8d351d6f64c8749c26a62d0b16e6.jpg',
    'description': 'Melbourne waterfront'
  }, {
    'src': 'https://i08.fotocdn.net/s117/88520a14b909d8ae/public_pin_l/2667669774.jpg',
    'description': 'Melbourne railway station'
  }, {
    'src': 'https://s1.1zoom.ru/b5050/210/326346-svetik_1920x1200.jpg',
    'description': 'Some Cathedral'
  }, {
    'src': 'https://avatars.mds.yandex.net/get-zen_doc/2380471/pub_5ebbee0a9a01033d6615af68_5ebc20703773f11ee7199355/scale_1200',
    'description': 'Melbourne tram'
  }]
}, {
  'description': 'Budapest is the capital and the most populous city of Hungary, and the ninth-largest city in the European Union by population within city limits.',
  'name': 'Budapest',
  'pictures': [{
    'src': 'https://traveltimes.ru/wp-content/uploads/2021/09/budas4.jpg',
    'description': 'Budapest bridge'
  }, {
    'src': 'https://vsthemes.org/uploads/posts/2017-12/1581997944_budapest_vsthemes_ru-39.jpg',
    'description': 'Old city'
  }, {
    'src': 'https://img1.fonwall.ru/o/bd/zdanie-vengerskogo-parlamenta-zdanie-budapeshta-budapesht-vengriya.jpg?route=mid&h=750',
    'description': 'Hungarian parliament'
  }, {
    'src': 'https://cdn.profile.ru/wp-content/uploads/2020/07/shutterstock_1078814498.jpg',
    'description': 'Some Castle'
  }]
}, {
  'description': 'Stockholm is the capital of Sweden. It has the most populous urban area in Sweden as well as in Scandinavia. 1 million people live in the municipality, approximately 1.6 million in the urban area.',
  'name': 'Stockholm',
  'pictures': [{
    'src': 'https://traveltimes.ru/wp-content/uploads/2021/07/3615b1f2cd21b6e9ede1957ea61809c0.jpg',
    'description': 'Old city'
  }, {
    'src': 'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/03/23853705760_08d478c12f_k-e1458159709341.jpg',
    'description': 'City island'
  }, {
    'src': 'https://i.pinimg.com/originals/4d/05/f5/4d05f5fec6ae6d7e070059e0b24e7695.jpg',
    'description': 'Swedish houses'
  }]
}, {
  'description': 'Vancouver is a major city in western Canada, located in the Lower Mainland region of British Columbia.',
  'name': 'Vancouver',
  'pictures': [{
    'src': 'https://avatars.mds.yandex.net/get-zen_doc/4721711/pub_60534f863729ca110e47a3ca_60534fa629a80b6fd2743bd9/scale_1200',
    'description': 'Vancouver city'
  }, {
    'src': 'https://images.wallpaperscraft.ru/image/single/vankuver_gorod_zdanie_vecher_arhitektura_47734_1920x1080.jpg',
    'description': 'Canadian Mounties'
  }]
}, {
  'description': 'Frankfurt, officially Frankfurt am Main, is the most populous city in the German state of Hesse.',
  'name': 'Frankfurt am Main',
  'pictures': [{
    'src': 'https://lifeglobe.net/media/entry/10008/2.jpg',
    'description': 'Frankfurt waterfront'
  }]
}, {
  'description': null,
  'name': 'Yekaterinburg',
  'pictures': []
}];

/***/ }),

/***/ "./src/mock/offers.js":
/*!****************************!*\
  !*** ./src/mock/offers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offers": () => (/* binding */ offers)
/* harmony export */ });
const offers = () => [{
  'type': 'taxi',
  'offers': []
}, {
  'type': 'bus',
  'offers': []
}, {
  'type': 'train',
  'offers': [{
    'id': 1,
    'title': 'Выбрать место',
    'price': 40
  }, {
    'id': 2,
    'title': 'Повысить класс',
    'price': 180
  }, {
    'id': 2,
    'title': 'Горячий обед',
    'price': 120
  }, {
    'id': 3,
    'title': 'Спальное купе',
    'price': 150
  }, {
    'id': 4,
    'title': 'дополнительный багаж',
    'price': 100
  }]
}, {
  'type': 'ship',
  'offers': [{
    'id': 5,
    'title': 'Питание в ресторане',
    'price': 350
  }, {
    'id': 6,
    'title': 'Спа-процедуры',
    'price': 600
  }, {
    'id': 7,
    'title': 'Каюта с балконом',
    'price': 550
  }, {
    'id': 8,
    'title': 'All-inclusive',
    'price': 900
  }]
}, {
  'type': 'drive',
  'offers': [{
    'id': 9,
    'title': 'Аренда каршеринга',
    'price': 450
  }, {
    'id': 10,
    'title': 'Бензин',
    'price': 80
  }, {
    'id': 11,
    'title': 'Повысить класс машины',
    'price': 150
  }]
}, {
  'type': 'flight',
  'offers': [{
    'id': 12,
    'title': 'Выбрать место',
    'price': 50
  }, {
    'id': 13,
    'title': 'Бизнес-класс',
    'price': 600
  }, {
    'id': 14,
    'title': 'Дополнительный багаж',
    'price': 150
  }]
}, {
  'type': 'check-in',
  'offers': [{
    'id': 15,
    'title': 'Завтрак в номер',
    'price': 150
  }, {
    'id': 16,
    'title': 'Расширенный номер',
    'price': 350
  }, {
    'id': 17,
    'title': 'Персональный водитель',
    'price': 800
  }]
}, {
  'type': 'sightseeing',
  'offers': [{
    'id': 18,
    'title': 'Персональный гид',
    'price': 350
  }, {
    'id': 19,
    'title': 'Покупка сувениров',
    'price': 150
  }]
}, {
  'type': 'restaurant',
  'offers': [{
    'id': 20,
    'title': 'Чаевые',
    'price': 50
  }]
}];

/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePoint": () => (/* binding */ generatePoint)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _offers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers */ "./src/mock/offers.js");
/* harmony import */ var _destinations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destinations */ "./src/mock/destinations.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");





const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generatePrice = () => getRandomInteger(1, 100) * 10;

const generateFromToDates = () => {
  const maxGap = 14;
  const fromDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(getRandomInteger(-maxGap, maxGap), 'day').add(getRandomInteger(-maxGap, maxGap), 'hour').add(getRandomInteger(-maxGap, maxGap), 'minute');
  const toDate = fromDate.clone().add(getRandomInteger(0, 14), 'day').add(getRandomInteger(0, 59), 'hour').add(getRandomInteger(0, 59), 'minute');
  return {
    from: fromDate.toISOString(),
    to: toDate.toISOString()
  };
};

const generatePoint = () => {
  const dates = generateFromToDates();
  const destinationArray = (0,_destinations__WEBPACK_IMPORTED_MODULE_2__.destinations)();
  const offerArray = (0,_offers__WEBPACK_IMPORTED_MODULE_1__.offers)();
  return {
    basePrice: generatePrice(),
    dateFrom: dates.from,
    dateTo: dates.to,
    destination: destinationArray[getRandomInteger(0, destinationArray.length - 1)],
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: offerArray,
    type: offerArray[getRandomInteger(0, offerArray.length - 1)].type
  };
};

/***/ }),

/***/ "./src/presenter/point-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/point-presenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointPresenter)
/* harmony export */ });
/* harmony import */ var _view_point_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/point-view */ "./src/view/point-view.js");
/* harmony import */ var _view_point_edit_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/point-edit-view */ "./src/view/point-edit-view.js");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

var _tripPointsListElement = /*#__PURE__*/new WeakMap();

var _changeData = /*#__PURE__*/new WeakMap();

var _changeMode = /*#__PURE__*/new WeakMap();

var _pointItemComponent = /*#__PURE__*/new WeakMap();

var _pointEditComponent = /*#__PURE__*/new WeakMap();

var _tripPoint = /*#__PURE__*/new WeakMap();

var _mode = /*#__PURE__*/new WeakMap();

var _replaceItemToForm = /*#__PURE__*/new WeakMap();

var _replaceFormToItem = /*#__PURE__*/new WeakMap();

var _escKeyDownHandler = /*#__PURE__*/new WeakMap();

var _handleEditClick = /*#__PURE__*/new WeakMap();

var _handleRollupClick = /*#__PURE__*/new WeakMap();

var _handleFavoriteClick = /*#__PURE__*/new WeakMap();

var _handleFormSubmit = /*#__PURE__*/new WeakMap();

class PointPresenter {
  constructor(tripPointsListElement, changeData, changeMode) {
    _classPrivateFieldInitSpec(this, _tripPointsListElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeData, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeMode, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointItemComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointEditComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _tripPoint, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _mode, {
      writable: true,
      value: Mode.DEFAULT
    });

    _defineProperty(this, "init", tripPoint => {
      _classPrivateFieldSet(this, _tripPoint, tripPoint);

      const prevPointItemComponent = _classPrivateFieldGet(this, _pointItemComponent);

      const prevPointEditComponent = _classPrivateFieldGet(this, _pointEditComponent);

      _classPrivateFieldSet(this, _pointItemComponent, new _view_point_view__WEBPACK_IMPORTED_MODULE_0__["default"](tripPoint));

      _classPrivateFieldSet(this, _pointEditComponent, new _view_point_edit_view__WEBPACK_IMPORTED_MODULE_1__["default"](tripPoint));

      _classPrivateFieldGet(this, _pointItemComponent).setEditClickHandler(_classPrivateFieldGet(this, _handleEditClick));

      _classPrivateFieldGet(this, _pointItemComponent).setFavoriteClickHandler(_classPrivateFieldGet(this, _handleFavoriteClick));

      _classPrivateFieldGet(this, _pointEditComponent).setRollupClickHandler(_classPrivateFieldGet(this, _handleRollupClick));

      _classPrivateFieldGet(this, _pointEditComponent).setFormSubmitHandler(_classPrivateFieldGet(this, _handleFormSubmit));

      if (prevPointItemComponent === null || prevPointEditComponent === null) {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.render)(_classPrivateFieldGet(this, _tripPointsListElement), _classPrivateFieldGet(this, _pointItemComponent), _utils_render__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFOREEND);
        return;
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.DEFAULT) {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointItemComponent), prevPointItemComponent);
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.EDITING) {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointEditComponent), prevPointEditComponent);
      }

      (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.remove)(prevPointItemComponent);
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.remove)(prevPointEditComponent);
    });

    _defineProperty(this, "destroy", () => {
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _pointItemComponent));
      (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _pointEditComponent));
    });

    _defineProperty(this, "resetView", () => {
      if (_classPrivateFieldGet(this, _mode) !== Mode.DEFAULT) {
        _classPrivateFieldGet(this, _pointEditComponent).reset(_classPrivateFieldGet(this, _tripPoint));

        _classPrivateFieldGet(this, _replaceFormToItem).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceItemToForm, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointEditComponent), _classPrivateFieldGet(this, _pointItemComponent));
        document.addEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));

        _classPrivateFieldGet(this, _changeMode).call(this);

        _classPrivateFieldSet(this, _mode, Mode.EDITING);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceFormToItem, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointItemComponent), _classPrivateFieldGet(this, _pointEditComponent));
        document.removeEventListener('keydown', _classPrivateFieldGet(this, _escKeyDownHandler));

        _classPrivateFieldSet(this, _mode, Mode.DEFAULT);
      }
    });

    _classPrivateFieldInitSpec(this, _escKeyDownHandler, {
      writable: true,
      value: evt => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          evt.preventDefault();

          _classPrivateFieldGet(this, _pointEditComponent).reset(_classPrivateFieldGet(this, _tripPoint));

          _classPrivateFieldGet(this, _replaceFormToItem).call(this);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleEditClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _replaceItemToForm).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _handleRollupClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointEditComponent).reset(_classPrivateFieldGet(this, _tripPoint));

        _classPrivateFieldGet(this, _replaceFormToItem).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _handleFavoriteClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _changeData).call(this, { ..._classPrivateFieldGet(this, _tripPoint),
          isFavorite: !_classPrivateFieldGet(this, _tripPoint).isFavorite
        });
      }
    });

    _classPrivateFieldInitSpec(this, _handleFormSubmit, {
      writable: true,
      value: point => {
        _classPrivateFieldGet(this, _changeData).call(this, point);

        _classPrivateFieldGet(this, _replaceFormToItem).call(this);
      }
    });

    _classPrivateFieldSet(this, _tripPointsListElement, tripPointsListElement);

    _classPrivateFieldSet(this, _changeData, changeData);

    _classPrivateFieldSet(this, _changeMode, changeMode);
  }

}

/***/ }),

/***/ "./src/presenter/trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripPresenter)
/* harmony export */ });
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.js");
/* harmony import */ var _view_points_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/points-list-view */ "./src/view/points-list-view.js");
/* harmony import */ var _view_no_trip_points_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-trip-points-view */ "./src/view/no-trip-points-view.js");
/* harmony import */ var _view_trip_sort_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/trip-sort-view */ "./src/view/trip-sort-view.js");
/* harmony import */ var _point_presenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point-presenter */ "./src/presenter/point-presenter.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/const */ "./src/utils/const.js");
/* harmony import */ var _utils_point_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/point-sort */ "./src/utils/point-sort.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }










var _mainElement = /*#__PURE__*/new WeakMap();

var _tripPointsElement = /*#__PURE__*/new WeakMap();

var _tripSortComponent = /*#__PURE__*/new WeakMap();

var _noTripPointsComponent = /*#__PURE__*/new WeakMap();

var _tripPointsListElement = /*#__PURE__*/new WeakMap();

var _tripPoints = /*#__PURE__*/new WeakMap();

var _pointPresenter = /*#__PURE__*/new WeakMap();

var _currentSortType = /*#__PURE__*/new WeakMap();

var _sourcedTripPoints = /*#__PURE__*/new WeakMap();

var _renderNoTasks = /*#__PURE__*/new WeakMap();

var _renderTripPointsListElement = /*#__PURE__*/new WeakMap();

var _handleModeChange = /*#__PURE__*/new WeakMap();

var _handlePointChange = /*#__PURE__*/new WeakMap();

var _sortTasks = /*#__PURE__*/new WeakMap();

var _handleSortTypeChange = /*#__PURE__*/new WeakMap();

var _renderSort = /*#__PURE__*/new WeakMap();

var _renderTripPoint = /*#__PURE__*/new WeakMap();

var _renderTripPointsList = /*#__PURE__*/new WeakMap();

var _renderMain = /*#__PURE__*/new WeakMap();

var _clearPointList = /*#__PURE__*/new WeakMap();

class TripPresenter {
  constructor(mainElement) {
    _classPrivateFieldInitSpec(this, _mainElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _tripPointsElement, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _tripSortComponent, {
      writable: true,
      value: new _view_trip_sort_view__WEBPACK_IMPORTED_MODULE_3__["default"]()
    });

    _classPrivateFieldInitSpec(this, _noTripPointsComponent, {
      writable: true,
      value: new _view_no_trip_points_view__WEBPACK_IMPORTED_MODULE_2__["default"]()
    });

    _classPrivateFieldInitSpec(this, _tripPointsListElement, {
      writable: true,
      value: new _view_points_list_view__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });

    _classPrivateFieldInitSpec(this, _tripPoints, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _pointPresenter, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldInitSpec(this, _currentSortType, {
      writable: true,
      value: _utils_const__WEBPACK_IMPORTED_MODULE_6__.SortType.SORT_DAY
    });

    _classPrivateFieldInitSpec(this, _sourcedTripPoints, {
      writable: true,
      value: []
    });

    _defineProperty(this, "init", tripPoints => {
      _classPrivateFieldSet(this, _tripPoints, [...tripPoints]);

      _classPrivateFieldSet(this, _sourcedTripPoints, [...tripPoints]);

      _classPrivateFieldGet(this, _renderMain).call(this);
    });

    _classPrivateFieldInitSpec(this, _renderNoTasks, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(_classPrivateFieldGet(this, _tripPointsElement), _classPrivateFieldGet(this, _noTripPointsComponent), _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
      }
    });

    _classPrivateFieldInitSpec(this, _renderTripPointsListElement, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(_classPrivateFieldGet(this, _tripPointsElement), _classPrivateFieldGet(this, _tripPointsListElement), _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
      }
    });

    _classPrivateFieldInitSpec(this, _handleModeChange, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.resetView());
      }
    });

    _classPrivateFieldInitSpec(this, _handlePointChange, {
      writable: true,
      value: updatedPoint => {
        _classPrivateFieldSet(this, _tripPoints, (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__.updateItem)(_classPrivateFieldGet(this, _tripPoints), updatedPoint));

        _classPrivateFieldSet(this, _sourcedTripPoints, (0,_utils_common__WEBPACK_IMPORTED_MODULE_5__.updateItem)(_classPrivateFieldGet(this, _sourcedTripPoints), updatedPoint));

        _classPrivateFieldGet(this, _pointPresenter).get(updatedPoint.id).init(updatedPoint);
      }
    });

    _classPrivateFieldInitSpec(this, _sortTasks, {
      writable: true,
      value: sortType => {
        switch (sortType) {
          case _utils_const__WEBPACK_IMPORTED_MODULE_6__.SortType.SORT_DAY:
            _classPrivateFieldGet(this, _tripPoints).sort(_utils_point_sort__WEBPACK_IMPORTED_MODULE_7__.sortTaskByDay);

            break;

          case _utils_const__WEBPACK_IMPORTED_MODULE_6__.SortType.SORT_TIME:
            _classPrivateFieldGet(this, _tripPoints).sort(_utils_point_sort__WEBPACK_IMPORTED_MODULE_7__.sortTaskByDuration);

            break;

          case _utils_const__WEBPACK_IMPORTED_MODULE_6__.SortType.SORT_PRICE:
            _classPrivateFieldGet(this, _tripPoints).sort(_utils_point_sort__WEBPACK_IMPORTED_MODULE_7__.sortTaskByPrice);

            break;

          default:
            _classPrivateFieldSet(this, _tripPoints, [..._classPrivateFieldGet(this, _sourcedTripPoints)]);

        }

        _classPrivateFieldSet(this, _currentSortType, sortType);
      }
    });

    _classPrivateFieldInitSpec(this, _handleSortTypeChange, {
      writable: true,
      value: sortType => {
        if (_classPrivateFieldGet(this, _currentSortType) === sortType) {
          return;
        }

        _classPrivateFieldGet(this, _sortTasks).call(this, sortType);

        _classPrivateFieldGet(this, _clearPointList).call(this);

        _classPrivateFieldGet(this, _renderTripPointsList).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _renderSort, {
      writable: true,
      value: () => {
        (0,_utils_render__WEBPACK_IMPORTED_MODULE_0__.render)(_classPrivateFieldGet(this, _tripPointsElement), _classPrivateFieldGet(this, _tripSortComponent), _utils_render__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN);

        _classPrivateFieldGet(this, _tripSortComponent).setSortTypeChangeHandler(_classPrivateFieldGet(this, _handleSortTypeChange));
      }
    });

    _classPrivateFieldInitSpec(this, _renderTripPoint, {
      writable: true,
      value: point => {
        const pointPresenter = new _point_presenter__WEBPACK_IMPORTED_MODULE_4__["default"](_classPrivateFieldGet(this, _tripPointsListElement), _classPrivateFieldGet(this, _handlePointChange), _classPrivateFieldGet(this, _handleModeChange));
        pointPresenter.init(point);

        _classPrivateFieldGet(this, _pointPresenter).set(point.id, pointPresenter);
      }
    });

    _classPrivateFieldInitSpec(this, _renderTripPointsList, {
      writable: true,
      value: () => {
        for (let i = 0; i < _classPrivateFieldGet(this, _tripPoints).length; i++) {
          _classPrivateFieldGet(this, _renderTripPoint).call(this, _classPrivateFieldGet(this, _tripPoints)[i]);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _renderMain, {
      writable: true,
      value: () => {
        if (_classPrivateFieldGet(this, _tripPoints).length === 0) {
          _classPrivateFieldGet(this, _renderNoTasks).call(this);
        } else {
          _classPrivateFieldGet(this, _renderSort).call(this);

          _classPrivateFieldGet(this, _renderTripPointsListElement).call(this);

          _classPrivateFieldGet(this, _sortTasks).call(this, _classPrivateFieldGet(this, _currentSortType));

          _classPrivateFieldGet(this, _renderTripPointsList).call(this);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _clearPointList, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.destroy());

        _classPrivateFieldGet(this, _pointPresenter).clear();
      }
    });

    _classPrivateFieldSet(this, _mainElement, mainElement);

    _classPrivateFieldSet(this, _tripPointsElement, _classPrivateFieldGet(this, _mainElement).querySelector('.trip-events'));
  }

}

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
const updateItem = (items, update) => {
  const index = items.findIndex(item => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

/***/ }),

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortType": () => (/* binding */ SortType)
/* harmony export */ });
const SortType = {
  SORT_DAY: 'sort-day',
  SORT_TIME: 'sort-time',
  SORT_PRICE: 'sort-price'
};

/***/ }),

/***/ "./src/utils/forms.js":
/*!****************************!*\
  !*** ./src/utils/forms.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPointTypesMarkup": () => (/* binding */ createPointTypesMarkup),
/* harmony export */   "createOffersSectionMarkup": () => (/* binding */ createOffersSectionMarkup)
/* harmony export */ });
const createPointTypesMarkup = (offers, chosenPointType) => {
  const createTypeMarkup = offer => {
    const isChecked = offer.type === chosenPointType ? 'checked=""' : '';
    const label = offer.type.charAt(0).toUpperCase() + offer.type.slice(1);
    return `<div class="event__type-item">
                          <input id="event-type-${offer.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offer.type}" ${isChecked}>
                          <label class="event__type-label  event__type-label--${offer.type}" for="event-type-${offer.type}-1">${label}</label>
                        </div>`;
  };

  return offers.map(createTypeMarkup).join('');
};
const createOffersSectionMarkup = (offersByTypes, pointType) => {
  const createOfferMarkup = offer => `<div class="event__available-offers">
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${pointType}-1" type="checkbox" name="event-offer-${pointType}">
                        <label class="event__offer-label" for="event-offer-name-1">
                          <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                      </div>`;

  let offersByCurrentType = [];

  for (let i = 0; i < offersByTypes.length; i++) {
    if (offersByTypes[i].type === pointType) {
      offersByCurrentType = offersByTypes[i].offers;
    }
  }

  const offersMarkup = offersByCurrentType.map(createOfferMarkup).join('');

  if (offersByCurrentType.length !== 0) {
    return `<section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    ${offersMarkup}</section>`;
  }

  return '';
};

/***/ }),

/***/ "./src/utils/point-sort.js":
/*!*********************************!*\
  !*** ./src/utils/point-sort.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortTaskByDay": () => (/* binding */ sortTaskByDay),
/* harmony export */   "sortTaskByDuration": () => (/* binding */ sortTaskByDuration),
/* harmony export */   "sortTaskByPrice": () => (/* binding */ sortTaskByPrice)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const sortTaskByDay = (pointA, pointB) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointA.dateFrom).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointB.dateFrom));
const sortTaskByDuration = (pointA, pointB) => {
  const durationPointA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointA.dateTo).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointA.dateFrom));
  const durationPointB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointB.dateTo).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointB.dateFrom));

  if (durationPointB - durationPointA !== 0) {
    return durationPointB - durationPointA;
  } else {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointA.dateFrom).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointB.dateFrom));
  }
};
const sortTaskByPrice = (pointA, pointB) => {
  if (pointB.basePrice - pointA.basePrice !== 0) {
    return pointB.basePrice - pointA.basePrice;
  } else {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointA.dateFrom).diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointB.dateFrom));
  }
};

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract-view */ "./src/view/abstract-view.js");

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const render = (container, element, place) => {
  const parent = container instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.element : container;
  const child = element instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? element.element : element;

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      parent.before(child);
      break;

    case RenderPosition.AFTERBEGIN:
      parent.prepend(child);
      break;

    case RenderPosition.BEFOREEND:
      parent.append(child);
      break;

    case RenderPosition.AFTEREND:
      parent.after(child);
      break;
  }
};
const createElement = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};
const replace = (newElement, oldElement) => {
  if (newElement === null || oldElement === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? newElement.element : newElement;
  const oldChild = oldElement instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldElement.element : oldElement;
  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};
const remove = component => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _element = /*#__PURE__*/new WeakMap();

class AbstractView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _defineProperty(this, "_callback", {});

    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/no-trip-points-view.js":
/*!*****************************************!*\
  !*** ./src/view/no-trip-points-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoTripPointsView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createNoTripPointsTemplate = () => `<p class="trip-events__msg">
    Click New Event to create your first point
    </p>`;

class NoTripPointsView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createNoTripPointsTemplate();
  }

}

/***/ }),

/***/ "./src/view/point-edit-view.js":
/*!*************************************!*\
  !*** ./src/view/point-edit-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointEditView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_destinations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/destinations */ "./src/mock/destinations.js");
/* harmony import */ var _mock_offers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/offers */ "./src/mock/offers.js");
/* harmony import */ var _smart_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-view */ "./src/view/smart-view.js");
/* harmony import */ var _utils_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/forms */ "./src/utils/forms.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }







const createPointEditTemplate = point => {
  const {
    basePrice: price,
    dateFrom: ISOFrom,
    dateTo: ISOTo,
    destination,
    type
  } = point;
  const DatetimeFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('DD/MM/YY HH:mm ');
  const DatetimeTo = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOTo).format('DD/MM/YY HH:mm');
  const pointTypeLabel = type.charAt(0).toUpperCase() + type.slice(1);
  const pointTypesMarkup = (0,_utils_forms__WEBPACK_IMPORTED_MODULE_4__.createPointTypesMarkup)((0,_mock_offers__WEBPACK_IMPORTED_MODULE_2__.offers)(), type);
  const destinationOptions = (0,_mock_destinations__WEBPACK_IMPORTED_MODULE_1__.destinations)().map(x => `<option value="${x.name}"></option>`).join('');
  const photosMarkup = destination.pictures.map(x => `<img className="event__photo" src="${x.src}" alt="${x.description}">`).join('');
  const editedOffersMarkup = (0,_utils_forms__WEBPACK_IMPORTED_MODULE_4__.createOffersSectionMarkup)((0,_mock_offers__WEBPACK_IMPORTED_MODULE_2__.offers)(), type);
  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${pointTypesMarkup}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${pointTypeLabel}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${destinationOptions}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time event__input-start-time" id="event-start-time-1" type="text" name="event-start-time" value="${DatetimeFrom}">
                    —
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time event__input-end-time" id="event-end-time-1" type="text" name="event-end-time" value="${DatetimeTo}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      €
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  ${editedOffersMarkup}
                  <section class="event__section  event__section--destination">
                    ${destination.description ? '<h3 class="event__section-title  event__section-title--destination">Destination</h3>' : ''}
                    <p class="event__destination-description">${destination.description ? destination.description : ''}</p>
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${photosMarkup}
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>`;
};

var _setInnerHandlers = /*#__PURE__*/new WeakMap();

var _typeGroupClickHandler = /*#__PURE__*/new WeakMap();

var _destinationChangeHandler = /*#__PURE__*/new WeakMap();

var _startTimeChangeHandler = /*#__PURE__*/new WeakMap();

var _endTimeChangeHandler = /*#__PURE__*/new WeakMap();

var _basePriceChangeHandler = /*#__PURE__*/new WeakMap();

var _rollupClickHandler = /*#__PURE__*/new WeakMap();

var _formSubmitHandler = /*#__PURE__*/new WeakMap();

var _getChangedDestination = /*#__PURE__*/new WeakMap();

class PointEditView extends _smart_view__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(_point) {
    super();

    _defineProperty(this, "reset", point => {
      this.updateData(PointEditView.parsePointToData(point));
    });

    _defineProperty(this, "restoreHandlers", () => {
      _classPrivateFieldGet(this, _setInnerHandlers).call(this);

      this.setRollupClickHandler(this._callback.rollupClick);
      this.setFormSubmitHandler(this._callback.formSubmit);
    });

    _classPrivateFieldInitSpec(this, _setInnerHandlers, {
      writable: true,
      value: () => {
        this.element.querySelector('.event__type-group').addEventListener('change', _classPrivateFieldGet(this, _typeGroupClickHandler));
        this.element.querySelector('.event__input--destination').addEventListener('change', _classPrivateFieldGet(this, _destinationChangeHandler));
        this.element.querySelector('.event__input-start-time').addEventListener('change', _classPrivateFieldGet(this, _startTimeChangeHandler));
        this.element.querySelector('.event__input-end-time').addEventListener('change', _classPrivateFieldGet(this, _endTimeChangeHandler));
        this.element.querySelector('.event__input--price').addEventListener('change', _classPrivateFieldGet(this, _basePriceChangeHandler));
      }
    });

    _classPrivateFieldInitSpec(this, _typeGroupClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          type: evt.target.value
        }, false);
      }
    });

    _classPrivateFieldInitSpec(this, _destinationChangeHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          destination: _classPrivateFieldGet(this, _getChangedDestination).call(this, evt.target.value)
        }, false);
      }
    });

    _classPrivateFieldInitSpec(this, _startTimeChangeHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          dateFrom: evt.target.value //ИСПРАВИТЬ!!!!!!!!!!!!

        }, true);
      }
    });

    _classPrivateFieldInitSpec(this, _endTimeChangeHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          dateTo: evt.target.value //ИСПРАВИТЬ!!!!!!!!!!!!

        }, true);
      }
    });

    _classPrivateFieldInitSpec(this, _basePriceChangeHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();
        this.updateData({
          basePrice: evt.target.value
        }, true);
      }
    });

    _defineProperty(this, "setRollupClickHandler", callback => {
      this._callback.rollupClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _rollupClickHandler));
    });

    _classPrivateFieldInitSpec(this, _rollupClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.rollupClick();
      }
    });

    _defineProperty(this, "setFormSubmitHandler", callback => {
      this._callback.formSubmit = callback;
      this.element.querySelector('form').addEventListener('submit', _classPrivateFieldGet(this, _formSubmitHandler));
    });

    _classPrivateFieldInitSpec(this, _formSubmitHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.formSubmit();

        this._callback.formSubmit(this._data);

        this._callback.formSubmit(PointEditView.parseDataToPoint(this._data));
      }
    });

    _classPrivateFieldInitSpec(this, _getChangedDestination, {
      writable: true,
      value: destinationName => {
        const allDestinations = (0,_mock_destinations__WEBPACK_IMPORTED_MODULE_1__.destinations)();

        for (let i = 0; i < allDestinations.length; i++) {
          if (allDestinations[i].name === destinationName) {
            return allDestinations[i];
          }
        }

        return {
          'description': null,
          'name': '',
          'pictures': []
        };
      }
    });

    this._data = PointEditView.parsePointToData(_point);

    _classPrivateFieldGet(this, _setInnerHandlers).call(this);
  }

  get template() {
    return createPointEditTemplate(this._data);
  }

}

_defineProperty(PointEditView, "parsePointToData", point => ({ ...point // В будущем здесь появится обработка Предложений (Offers).

}));

_defineProperty(PointEditView, "parseDataToPoint", data => {
  const point = { ...data
  }; // В будущем здесь появится обработка Предложений (Offers).

  return point;
});

/***/ }),

/***/ "./src/view/point-view.js":
/*!********************************!*\
  !*** ./src/view/point-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
/* harmony import */ var _mock_offers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/offers */ "./src/mock/offers.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





const createPointTemplate = point => {
  const {
    basePrice: price,
    dateFrom: ISOFrom,
    dateTo: ISOTo,
    destination,
    isFavorite: isFavorite,
    type
  } = point;
  const destinationName = destination.name;
  const dayFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('MMM D');
  const dateFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('YYYY-MM-DD');
  const TimeFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('HH:mm');
  const DatetimeFrom = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOFrom).format('YYYY-MM-DDTHH:mm');
  const TimeTo = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOTo).format('HH:mm');
  const DatetimeTo = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(ISOTo).format('YYYY-MM-DDTHH:mm');

  const getDuration = (beginISO, endISO) => {
    const getTimeDifference = () => {
      const startDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(beginISO).toDate();
      const endDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endISO).toDate();
      const resultDict = new Date(endDate - startDate);
      return {
        days: resultDict.getUTCDate() - 1,
        hours: resultDict.getUTCHours(),
        minutes: resultDict.getUTCMinutes()
      };
    };

    const timeDifference = getTimeDifference();
    const resultArray = [];

    if (timeDifference.days !== 0) {
      resultArray[0] = `${String(timeDifference.days).padStart(2, '0')}D`;
    }

    if (timeDifference.hours !== 0) {
      resultArray[1] = `${String(timeDifference.hours).padStart(2, '0')}H`;
    }

    if (timeDifference.minutes !== 0) {
      resultArray[2] = `${String(timeDifference.minutes).padStart(2, '0')}M`;
    }

    return resultArray.join(' ');
  };

  const duration = getDuration(ISOFrom, ISOTo);
  const isFavoriteClass = isFavorite ? ' event__favorite-btn--active' : ''; // ИСПРАВИТЬ, ЧТОБЫ НЕ ОТРИСОВЫВАЛ, НЕВЫБРАННЫЕ ПРЕДЛОЖЕНИЯ!!!

  const CreateOffers = (pointType, offersByTypes) => {
    const createOfferMarkup = offer => `<li class="event__offer">
                    <span class="event__offer-title">${offer.title}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${offer.price}</span>
                  </li>`;

    let offersByCurrentType = [];

    for (let i = 0; i < offersByTypes.length; i++) {
      if (offersByTypes[i].type === pointType) {
        offersByCurrentType = offersByTypes[i].offers;
      }
    }

    return offersByCurrentType.map(createOfferMarkup).join('');
  };

  const OffersMarkup = CreateOffers(type, (0,_mock_offers__WEBPACK_IMPORTED_MODULE_2__.offers)());
  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${dateFrom}">${dayFrom}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${destinationName}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${DatetimeFrom}">${TimeFrom}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${DatetimeTo}">${TimeTo}</time>
                  </p>
                  <p class="event__duration">${duration}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">${OffersMarkup}</ul>
                <button class="event__favorite-btn${isFavoriteClass}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
};

var _point = /*#__PURE__*/new WeakMap();

var _editClickHandler = /*#__PURE__*/new WeakMap();

var _favoriteClickHandler = /*#__PURE__*/new WeakMap();

class PointView extends _abstract_view__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setEditClickHandler", callback => {
      this._callback.editClick = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _editClickHandler));
    });

    _classPrivateFieldInitSpec(this, _editClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.editClick();
      }
    });

    _defineProperty(this, "setFavoriteClickHandler", callback => {
      this._callback.favoriteClick = callback;
      this.element.querySelector('.event__favorite-btn').addEventListener('click', _classPrivateFieldGet(this, _favoriteClickHandler));
    });

    _classPrivateFieldInitSpec(this, _favoriteClickHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.favoriteClick();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createPointTemplate(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/points-list-view.js":
/*!**************************************!*\
  !*** ./src/view/points-list-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointsListView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createPointsListTemplate = () => '<ul class="trip-events__list"></ul>';

class PointsListView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createPointsListTemplate();
  }

}

/***/ }),

/***/ "./src/view/smart-view.js":
/*!********************************!*\
  !*** ./src/view/smart-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class SmartView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_data", {});

    _defineProperty(this, "updateData", (update, justDataUpdating) => {
      if (!update) {
        return;
      }

      this._data = { ...this._data,
        ...update
      };

      if (justDataUpdating) {
        return;
      }

      this.updateElement();
    });

    _defineProperty(this, "updateElement", () => {
      const prevElement = this.element;
      const parent = prevElement.parentElement;
      this.removeElement();
      const newElement = this.element;
      parent.replaceChild(newElement, prevElement);
      this.restoreHandlers();
    });

    _defineProperty(this, "restoreHandlers", () => {
      throw new Error('Abstract method not implemented: restoreHandlers');
    });
  }

}

/***/ }),

/***/ "./src/view/trip-filters-view.js":
/*!***************************************!*\
  !*** ./src/view/trip-filters-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripFiltersView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createTripFiltersTemplate = () => `<form class="trip-filters" action="#" method="get">
                <div class="trip-filters__filter">
                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
                  <label class="trip-filters__filter-label" for="filter-future">Future</label>
                </div>

                <div class="trip-filters__filter">
                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
                  <label class="trip-filters__filter-label" for="filter-past">Past</label>
                </div>

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;

class TripFiltersView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createTripFiltersTemplate();
  }

}

/***/ }),

/***/ "./src/view/trip-sort-view.js":
/*!************************************!*\
  !*** ./src/view/trip-sort-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripSortView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/const */ "./src/utils/const.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




const createTripSortTemplate = () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${_utils_const__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_DAY}">
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${_utils_const__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_TIME}">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${_utils_const__WEBPACK_IMPORTED_MODULE_1__.SortType.SORT_PRICE}">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`;

var _sortTypeChangeHandler = /*#__PURE__*/new WeakMap();

class TripSortView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "setSortTypeChangeHandler", callback => {
      this._callback.sortTypeChange = callback;
      this.element.addEventListener('change', _classPrivateFieldGet(this, _sortTypeChangeHandler));
    });

    _classPrivateFieldInitSpec(this, _sortTypeChangeHandler, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.sortTypeChange(evt.target.dataset.sortType);
      }
    });
  }

  get template() {
    return createTripSortTemplate();
  }

}

/***/ }),

/***/ "./src/view/trip-tabs-view.js":
/*!************************************!*\
  !*** ./src/view/trip-tabs-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripTabsView)
/* harmony export */ });
/* harmony import */ var _abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view */ "./src/view/abstract-view.js");


const createTripTabsTemplate = () => `<nav class="trip-controls__trip-tabs  trip-tabs">
                <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
                <a class="trip-tabs__btn" href="#">Stats</a>
              </nav>`;

class TripTabsView extends _abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createTripTabsTemplate();
  }

}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/nanoid/index.dev.js":
/*!******************************************!*\
  !*** ./node_modules/nanoid/index.dev.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet),
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

if (true) {
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}
let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, size, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * size) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _view_trip_tabs_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/trip-tabs-view.js */ "./src/view/trip-tabs-view.js");
/* harmony import */ var _view_trip_filters_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/trip-filters-view.js */ "./src/view/trip-filters-view.js");
/* harmony import */ var _presenter_trip_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/trip-presenter */ "./src/presenter/trip-presenter.js");
/* harmony import */ var _mock_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/point */ "./src/mock/point.js");





const TRIP_POINTS_COUNT = 10;
const tripPoints = Array.from({
  length: TRIP_POINTS_COUNT
}, _mock_point__WEBPACK_IMPORTED_MODULE_4__.generatePoint);
const pageMainElement = document.querySelector('.page-body');
const tripControlsNavigationElement = document.querySelector('.trip-controls__navigation');
const tripControlsFiltersElement = document.querySelector('.trip-controls__filters');
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripControlsNavigationElement, new _view_trip_tabs_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(tripControlsFiltersElement, new _view_trip_filters_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](), _utils_render_js__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND);
const tripPresenter = new _presenter_trip_presenter__WEBPACK_IMPORTED_MODULE_3__["default"](pageMainElement);
tripPresenter.init(tripPoints);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map