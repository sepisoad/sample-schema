const userLight = {
  'type': 'array',
  'items': {
    '$ref': '#/definitions/UsersLightElement'
  },
  'definitions': {
    'UsersLightElement': {
      'type': 'object',
      'additionalProperties': false,
      'properties': {
        'firstName': {
          'type': 'string'
        }
      },
      'required': [
        'firstName'
      ],
      'title': 'UsersLightElement'
    }
  }
}

const userExtended = {
  'type': 'array',
  'items': {
    '$ref': '#/definitions/UsersExtendedElement'
  },
  'definitions': {
    'UsersExtendedElement': {
      'type': 'object',
      'additionalProperties': false,
      'properties': {
        'firstName': {
          'type': 'string'
        },
        'lastName': {
          'type': 'string'
        }
      },
      'required': [
        'firstName',
        'lastName'
      ],
      'title': 'UsersExtendedElement'
    }
  }
}

module.exports = function () {
  return {
    userLight,
    userExtended
  }
}
