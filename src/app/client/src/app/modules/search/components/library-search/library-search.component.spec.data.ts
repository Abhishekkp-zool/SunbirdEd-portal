export const Response = {
  successData: {
    'id': 'api.content.search',
    'ver': '1.0',
    'ts': '2018-04-20T12:08:27.166Z',
    'params': {
      'resmsgid': '884143e0-4493-11e8-953e-4d77b46d6543',
      'msgid': '8835f940-4493-11e8-a1ed-091dca70410a',
      'status': 'successful',
      'err': null,
      'errmsg': null
    },
    'responseCode': 'OK',
    'result': {
      'count': 283,
      'content': [
        {
          'channel': 'in.ekstep',
          'downloadUrl': 'https://ekstep-public-dev.s3-ap-soom/ecd-from-akshara-kannada_1488879924286_do_1121933583296348161147_1.0.ecar',
          'language': [
            'English'
          ],
          'variants': {
            'spine': {
              'ecarUrl': 'https://ekstep-publi96348161147/kshara-kannada_1488879925028_do_1121933583296348161147_1.0_spine.ecar',
              'size': 822
            }
          },
          'mimeType': 'application/vnd.ekstep.plugin-archive',
          'objectType': 'Content',
          'gradeLevel': [
            'Grade 1'
          ],
          'collections': [
            'do_1124708996919214081275',
            'do_112472116139458560178'
          ],
          'appId': 'dev.ekstep.in',
          'copyType': 'Enhance',
          'contentEncoding': 'gzip',
          'artifactUrl': 'https://ekstep-public-817/artifact/akshara_kan_1487743191313.zip',
          'contentType': 'Worksheet',
          'lastUpdatedBy': '452',
          'identifier': 'do_1121933583296348161147',
          'audience': [
            'Learner'
          ],
          'visibility': 'Default',
          'consumerId': 'f6878ac4-e9c9-4bc4-80be-298c5a73b447',
          'portalOwner': '449',
          'mediaType': 'content',
          'osId': 'org.ekstep.quiz.app',
          'ageGroup': [
            '5-6'
          ],
          'lastPublishedBy': '452',
          'languageCode': 'en',
          'graph_id': 'domain',
          'nodeType': 'DATA_NODE',
          'prevState': 'Review',
          'size': 1870310,
          'lastPublishedOn': '2017-03-07T09:45:24.285+0000',
          'name': 'Copied From Akshara - Kannada',
          'status': 'Live',
          'code': 'org.ekstep.feb22.story.test03.fork',
          'origin': 'do_11218758555843788817',
          'description': 'Akshara Kannada',
          'idealScreenSize': 'normal',
          'createdOn': '2017-03-02T09:31:01.723+0000',
          'contentDisposition': 'inline',
          'lastUpdatedOn': '2017-05-24T17:46:37.879+0000',
          'SYS_INTERNAL_LAST_UPDATED_ON': '2017-06-09T06:45:11.972+0000',
          'owner': 'EkStep',
          'os': [
            'All'
          ],
          'pkgVersion': 1,
          'versionKey': '1496990711972',
          'idealScreenDensity': 'hdpi',
          's3Key': 'ecar_files/do_1121933583296348161147/copied-from-akshara-kannada_1488879924286_do_1121933583296348161147_1.0.ecar',
          'framework': 'NCF',
          'createdBy': '449',
          'compatibilityLevel': 1,
          'node_id': 96096
        }
      ]
    }
  },
  noResult: {
    'id': 'api.content.search',
    'ver': '1.0',
    'ts': '2018-04-20T12:08:27.166Z',
    'params': {
      'resmsgid': '884143e0-4493-11e8-953e-4d77b46d6543',
      'msgid': '8835f940-4493-11e8-a1ed-091dca70410a',
      'status': 'successful',
      'err': null,
      'errmsg': null
    },
    'responseCode': 'OK',
    'result': {
      'count': 0,
      'content': []
    }
  },
  pager: {
    'totalItems': 1173, 'currentPage': 3, 'pageSize': 25, 'totalPages': 47,
    'startPage': 30, 'endPage': 34, 'startIndex': 725, 'endIndex': 749, 'pages': [30, 31, 32, 33, 34]
  },
  filters: [
    {
      'code': 'board',
      'dataType': 'text',
      'name': 'Board',
      'label': 'Board',
      'description': 'Education Board (Like MP Board, NCERT, etc)',
      'editable': true,
      'inputType': 'select',
      'required': false,
      'displayProperty': 'Editable',
      'visible': true,
      'renderingHints': {
        'semanticColumnWidth': 'three'
      },
      'index': 1,
      'range': [
        {
          'identifier': 'ncf_board_ncert',
          'code': 'ncert',
          'name': 'NCERT',
          'description': '',
          'index': 2,
          'category': 'board',
          'status': 'Live'
        },
        {
          'identifier': 'ncf_board_cbse',
          'code': 'cbse',
          'name': 'CBSE',
          'description': '',
          'index': 1,
          'category': 'board',
          'status': 'Live'
        },
        {
          'identifier': 'ncf_board_icse',
          'code': 'icse',
          'name': 'ICSE',
          'description': '',
          'index': 3,
          'category': 'board',
          'status': 'Live'
        }
      ]
    },
    {
      'code': 'medium',
      'dataType': 'text',
      'name': 'Medium',
      'label': 'Medium',
      'description': 'Medium of instruction',
      'editable': true,
      'inputType': 'select',
      'required': false,
      'displayProperty': 'Editable',
      'visible': true,
      'renderingHints': {
        'semanticColumnWidth': 'three'
      },
      'index': 2,
      'range': [
        {
          'identifier': 'ncf_medium_english',
          'code': 'english',
          'name': 'English',
          'description': '',
          'index': 1,
          'category': 'medium',
          'status': 'Live'
        },
        {
          'identifier': 'ncf_medium_hindi',
          'code': 'hindi',
          'name': 'Hindi',
          'description': '',
          'index': 2,
          'category': 'medium',
          'status': 'Live'
        }
      ]
    },
    {
      'code': 'subject',
      'dataType': 'text',
      'name': 'Subject',
      'label': 'Subject',
      'description': 'Subject of the Content to use to teach',
      'editable': true,
      'inputType': 'select',
      'required': false,
      'displayProperty': 'Editable',
      'visible': true,
      'renderingHints': {
        'semanticColumnWidth': 'three'
      },
      'index': 3,
      'range': [
        {
          'identifier': 'ncf_subject_mathematics',
          'code': 'mathematics',
          'name': 'Mathematics',
          'description': '',
          'index': 1,
          'category': 'subject',
          'status': 'Live'
        },
        {
          'identifier': 'ncf_subject_english',
          'code': 'english',
          'name': 'English',
          'description': '',
          'index': 2,
          'category': 'subject',
          'status': 'Live'
        }
      ]
    },
    {
      'code': 'gradeLevel',
      'dataType': 'text',
      'name': 'Grade',
      'label': 'Grade',
      'description': 'Grade',
      'editable': true,
      'inputType': 'select',
      'required': false,
      'displayProperty': 'Editable',
      'visible': true,
      'renderingHints': {
        'semanticColumnWidth': 'three'
      },
      'index': 4,
      'range': [
        {
          'identifier': 'ncf_gradelevel_kindergarten',
          'code': 'kindergarten',
          'name': 'KG',
          'description': 'KG',
          'index': 1,
          'category': 'gradelevel',
          'status': 'Live'
        },
        {
          'identifier': 'ncf_gradelevel_grade1',
          'code': 'grade1',
          'name': 'Class 1',
          'description': 'Class 1',
          'index': 2,
          'category': 'gradelevel',
          'status': 'Live'
        }
      ]
    }
  ]
};

