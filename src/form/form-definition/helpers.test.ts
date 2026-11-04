import { ComponentType } from '~/src/components/enums.js'
import { type ConditionListItemRefValueDataV2 } from '~/src/conditions/types.js'
import {
  getFormAction,
  getHiddenFields,
  isAllowCopyEnabled,
  isConditionListItemRefValueData,
  isDuplicateOutput,
  isFeedbackForm,
  isFormDefinition
} from '~/src/form/form-definition/helpers.js'
import {
  type FormDefinition,
  type Output
} from '~/src/form/form-definition/types.js'
import { ControllerType } from '~/src/pages/enums.js'
import {
  buildCheckboxComponent,
  buildDefinition,
  buildQuestionPage,
  buildTextFieldComponent
} from '~/src/stubs.js'

describe('helpers', () => {
  describe('isFormDefinition', () => {
    it('should return true if a FormDefinition', () => {
      const def = {
        name: 'form name',
        conditions: [],
        pages: []
      } as unknown as FormDefinition
      expect(isFormDefinition(def)).toBe(true)
    })

    it('should return false if undefined', () => {
      const def = undefined
      expect(isFormDefinition(def)).toBe(false)
    })

    it('should return false if primitive string', () => {
      const def = ''
      expect(isFormDefinition(def)).toBe(false)
    })

    it('should return false if primitive number', () => {
      const def = 1
      expect(isFormDefinition(def)).toBe(false)
    })

    it('should return false if not a form def', () => {
      const def = {
        conditions: [],
        pages: []
      } as unknown as FormDefinition
      expect(isFormDefinition(def)).toBe(false)
    })
  })

  describe('isConditionListItemRefValueData', () => {
    it('should return true if a ConditionListItemRefValueDataV2', () => {
      const data = {
        itemId: 'b3a5030c-57f1-4d2e-8db9-6adeeba43c07',
        listId: '58dfa64d-7b14-4b48-b8b1-48128ecf1f60'
      }
      expect(isConditionListItemRefValueData(data)).toBe(true)
    })

    it('should return false if undefined', () => {
      const data = undefined
      expect(isConditionListItemRefValueData(data)).toBe(false)
    })

    it('should return false if primitive string', () => {
      const data = ''
      expect(isConditionListItemRefValueData(data)).toBe(false)
    })

    it('should return false if primitive number', () => {
      const data = 1
      expect(isConditionListItemRefValueData(data)).toBe(false)
    })

    it('should return false if not a ConditionListItemRefValueDataV2', () => {
      const data = {
        itemId: 'b3a5030c-57f1-4d2e-8db9-6adeeba43c07'
      } as ConditionListItemRefValueDataV2
      expect(isConditionListItemRefValueData(data)).toBe(false)
    })
  })

  describe('getHiddenFields', () => {
    it('should return empty array if no pages', () => {
      const def = {
        name: 'form name',
        conditions: [],
        pages: []
      } as unknown as FormDefinition
      expect(getHiddenFields(def)).toEqual([])
    })

    it('should return array of hidden fields even if across different pages', () => {
      const page1 = buildQuestionPage({
        controller: ControllerType.Page,
        title: 'sdsfdf',
        path: '/sdsfdf',
        components: [
          buildCheckboxComponent({
            title: 'What is your favourite adventure?',
            name: 'jnUjwa',
            shortDescription: 'Your favourite adventure'
          }),
          {
            type: ComponentType.HiddenField,
            name: 'hidden1',
            title: '',
            options: {}
          },
          {
            type: ComponentType.HiddenField,
            name: 'hidden2',
            title: '',
            options: {}
          }
        ],
        next: [],
        id: '0f711e08-3801-444d-8e37-a88867c48f04'
      })
      const page2 = buildQuestionPage({
        controller: ControllerType.Page,
        title: 'kndywh',
        path: '/kndywh',
        components: [
          buildCheckboxComponent({
            title: 'What is your favourite colour?',
            name: 'axkGhe',
            shortDescription: 'Your favourite colour'
          })
        ],
        next: [],
        id: '11711e08-3801-444d-8e37-a88867c48f04'
      })
      const page3 = buildQuestionPage({
        controller: ControllerType.Page,
        title: 'lwirta',
        path: '/lwirta',
        components: [
          {
            type: ComponentType.HiddenField,
            name: 'hidden3',
            title: '',
            options: {}
          }
        ],
        next: [],
        id: '22711e08-3801-444d-8e37-a88867c48f04'
      })
      const page4 = buildQuestionPage({
        controller: ControllerType.Page,
        title: 'wwwfff',
        path: '/wwwfff',
        components: [
          {
            type: ComponentType.Html,
            name: 'html',
            title: '',
            content: '<p>some text</p>',
            options: {}
          }
        ],
        next: [],
        id: '33711e08-3801-444d-8e37-a88867c48f04'
      })
      const page5 = buildQuestionPage({
        controller: ControllerType.Page,
        title: 'eeeddd',
        path: '/eeeddd',
        components: undefined,
        next: [],
        id: '44711e08-3801-444d-8e37-a88867c48f04'
      })
      const page6 = buildQuestionPage({
        controller: ControllerType.Page,
        title: 'lwirta',
        path: '/lwirta',
        components: [
          buildTextFieldComponent({
            title: 'What is your name?',
            name: 'kwuRts',
            shortDescription: 'Your name'
          }),
          {
            type: ComponentType.HiddenField,
            name: 'hidden4',
            title: '',
            options: {}
          },
          {
            type: ComponentType.HiddenField,
            name: 'hidden5',
            title: '',
            options: {}
          },
          {
            type: ComponentType.HiddenField,
            name: 'hidden6',
            title: '',
            options: {}
          }
        ],
        next: [],
        id: '55711e08-3801-444d-8e37-a88867c48f04'
      })
      const def = {
        name: 'form name',
        conditions: [],
        pages: [page1, page2, page3, page4, page5, page6]
      } as unknown as FormDefinition
      expect(getHiddenFields(def)).toEqual([
        {
          name: 'hidden1',
          type: ComponentType.HiddenField,
          title: '',
          options: {}
        },
        {
          name: 'hidden2',
          type: ComponentType.HiddenField,
          title: '',
          options: {}
        },
        {
          name: 'hidden3',
          type: ComponentType.HiddenField,
          title: '',
          options: {}
        },
        {
          name: 'hidden4',
          type: ComponentType.HiddenField,
          title: '',
          options: {}
        },
        {
          name: 'hidden5',
          type: ComponentType.HiddenField,
          title: '',
          options: {}
        },
        {
          name: 'hidden6',
          type: ComponentType.HiddenField,
          title: '',
          options: {}
        }
      ])
    })
  })

  describe('isFeedbackForm', () => {
    const page1 = buildQuestionPage({
      controller: ControllerType.Page,
      title: 'give feedback',
      path: '/give-feedback',
      components: undefined,
      next: [],
      id: '44711e08-3801-444d-8e37-a88867c48f04'
    })
    const page2 = buildQuestionPage({
      // @ts-expect-error - custom controller
      controller: 'FeedbackPageController',
      title: 'give feedback',
      path: '/give-feedback',
      components: undefined,
      next: [],
      id: '44711e08-3801-444d-8e37-a88867c48f04'
    })

    test('returns true when contains FeedbackPageController', () => {
      const def = {
        name: 'form name',
        conditions: [],
        pages: [page1, page2]
      } as unknown as FormDefinition
      expect(isFeedbackForm(def)).toBe(true)
    })

    test('returns false when doesnt contain FeedbackPageController', () => {
      const def = {
        name: 'form name',
        conditions: [],
        pages: [page1]
      } as unknown as FormDefinition
      expect(isFeedbackForm(def)).toBe(false)
    })

    test('returns false when undefined', () => {
      const def = {} as unknown as FormDefinition
      expect(isFeedbackForm(def)).toBe(false)
    })
  })

  describe('isDuplicateOutput', () => {
    const output: Output = {
      emailAddress: 'someone@example.gov.uk',
      audience: 'machine',
      version: '2',
      condition: 'ab6a10cd-2a9e-4b8f-9e5c-3f2f2c9e94a1'
    }

    it('should return true when every value matches', () => {
      expect(isDuplicateOutput(output, { ...output })).toBe(true)
    })

    it('should ignore the case and surrounding space of the address', () => {
      expect(
        isDuplicateOutput(output, {
          ...output,
          emailAddress: ' SOMEONE@Example.Gov.UK '
        })
      ).toBe(true)
    })

    it('should treat a missing condition as an empty one', () => {
      const unconditional = { ...output, condition: undefined }

      expect(
        isDuplicateOutput(unconditional, { ...output, condition: '' })
      ).toBe(true)
    })

    it('should return false when the condition differs', () => {
      expect(isDuplicateOutput(output, { ...output, condition: '' })).toBe(
        false
      )
    })

    it('should return false when the audience differs', () => {
      expect(isDuplicateOutput(output, { ...output, audience: 'human' })).toBe(
        false
      )
    })

    it('should return false when the version differs', () => {
      expect(isDuplicateOutput(output, { ...output, version: '1' })).toBe(false)
    })

    it('should return false when the address differs', () => {
      expect(
        isDuplicateOutput(output, {
          ...output,
          emailAddress: 'someone-else@example.gov.uk'
        })
      ).toBe(false)
    })
  })

  describe('isAllowCopyEnabled', () => {
    const buildFormDefinitionWithOptions = (options: unknown) => {
      const formDefinition = buildDefinition()
      Object.assign(formDefinition, { metadata: { options } })
      return formDefinition
    }

    it('should return true when copying answers is enabled', () => {
      expect(
        isAllowCopyEnabled(buildFormDefinitionWithOptions({ allowCopy: true }))
      ).toBe(true)
    })

    it.each([
      undefined,
      null,
      'invalid',
      {},
      { allowCopy: false },
      { allowCopy: 'true' }
    ])('should return false when copy is not enabled (%p)', (options) => {
      expect(isAllowCopyEnabled(buildFormDefinitionWithOptions(options))).toBe(
        false
      )
    })

    it('should return false when options are absent', () => {
      expect(isAllowCopyEnabled(buildDefinition())).toBe(false)
    })
  })
  describe('getFormAction', () => {
    it('should return the copy action when copying is enabled', () => {
      const formDefinition = buildDefinition()
      Object.assign(formDefinition, {
        metadata: { options: { allowCopy: true } }
      })
      const message = {
        meta: {}
      } as {
        meta: {
          custom?: { actionName?: string; actionReferenceNumber?: string }
        }
      }
      Object.assign(message.meta, {
        custom: {
          actionName: 'copy',
          actionReferenceNumber: '123-456-789'
        }
      })

      expect(getFormAction(message.meta, formDefinition)).toEqual({
        name: 'copy',
        referenceNumber: '123-456-789'
      })
    })

    it('should return undefined when the message is not a copy action', () => {
      const message = {
        meta: {}
      }
      expect(getFormAction(message.meta, buildDefinition())).toBeUndefined()
    })

    it('should return undefined when the message is missing any action', () => {
      const message = {
        meta: undefined
      }
      expect(getFormAction(message.meta, buildDefinition())).toBeUndefined()
    })
  })
})

/**
 * @import { ComponentDef } from '~/src/components/types.js'
 */
