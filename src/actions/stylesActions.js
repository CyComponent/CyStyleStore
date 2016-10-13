export const ADD_STYLE = 'ADD_STYLE'
export const DELETE_STYLE = 'DELETE_STYLE'

export function addStyle(styleId, style) {
  return {
    type: ADD_STYLE,
    styleId,
    style
  }
}

export function deleteStyle(styleId) {
  return {
    type: DELETE_STYLE,
    styleId
  }
}
