import { addHiddenApplicationComponent } from '../../constants/applicationComponent';

describe('addHiddenApplicationComponent', () => {
  let form;

  beforeEach(() => {
    form = {
      display: 'form',
      components: []
    };
  });

  it('should add applicationId hidden component to form components', () => {
    addHiddenApplicationComponent(form);
    expect(form.components).toHaveLength(2);
    expect(form.components[0].key).toEqual('applicationId');
  });

  it('should add applicationId hidden component to the first panel if there is no applicationId component but the form display is wizard', () => {
    form.display = 'wizard';
    form.components = [
      {
        type: 'panel',
        components: []
      }
    ];

    addHiddenApplicationComponent(form);
    expect(form.components).toHaveLength(1);
    expect(form.components[0].type).toEqual('panel');
    expect(form.components[0].components).toHaveLength(2);
    expect(form.components[0].components[0].key).toEqual('applicationId');
  });

  it('should add applicationId hidden component to the existing panel if there is no applicationId component but the form display is wizard', () => {
    form.display = 'wizard';
    form.components = [
      {
        type: 'panel',
        components: [
          {
            
          }
        ]
      },
      {
        type: 'panel',
        components: [
          {
            key: 'applicationId'
          }
        ]
      }
    ];

    addHiddenApplicationComponent(form);
    expect(form.components).toHaveLength(2);  
    expect(form.components[0].components).toHaveLength(3);
    expect(form.components[1].components).toHaveLength(1);
    expect(form.components[1].components[0].key).toEqual('applicationId');
  });

  it('should not add applicationId hidden component if it already exists', () => {
    form.components = [
      {
        key: 'applicationId'
      }
    ];

    addHiddenApplicationComponent(form);
    expect(form.components).toHaveLength(2);
    expect(form.components[0].key).toEqual('applicationId');
  });

  it('should add applicationStatus hidden component to form components', () => {
    addHiddenApplicationComponent(form);
    expect(form.components).toHaveLength(2);
    expect(form.components[1].key).toEqual('applicationStatus');
  });

  it('should not add applicationStatus hidden component if it already exists', () => {
    form.components = [
      {
        key: 'applicationStatus'
      }
    ];

    addHiddenApplicationComponent(form);
    expect(form.components).toHaveLength(2);  
    expect(form.components[0].key).toEqual('applicationStatus');
  });

});