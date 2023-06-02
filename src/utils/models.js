// See https://platform.openai.com/docs/models/model-endpoint-compatibility for the list of models and compatibilities

const models = {
  'chat/completions': {
    'gpt-4': 'gpt-4',
    'gpt-4-0314': 'gpt-4-0314',
    'gpt-4-32k': 'gpt-4-32k',
    'gpt-4-32k-0314': 'gpt-4-32k-0314',
    'gpt-3.5-turbo': 'gpt-3.5-turbo',
    'gpt-3.5-turbo-0301': 'gpt-3.5-turbo-0301'
  },
  'completions': {
    'text-davinci-003': 'text-davinci-003',
    'text-davinci-002': 'text-davinci-002',
    'text-curie-001': 'text-curie-001',
    'text-babbage-001': 'text-babbage-001',
    'text-ada-001': 'text-ada-001'
  },
  'audio/transcriptions': {
    'whisper-1': 'whisper-1'
  },
  'audio/translations': {
    'whisper-1': 'whisper-1'
  },
  'fine-tunes': {
    'davinci': 'davinci',
    'curie': 'curie',
    'babbage': 'babbage',
    'ada': 'ada'
  },
  'embeddings': {
    'text-embedding-ada-002': 'text-embedding-ada-002',
    'text-search-ada-doc-001': 'text-search-ada-doc-001'
  }
};

export default models;