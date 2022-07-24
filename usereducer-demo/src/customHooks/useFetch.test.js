import useFetch from "./UseFetch";

beforeEach(() => {
    const mockResponse = {};
    //spy on fetch API 
    console.log('before Each');
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse)
    })

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            value: "Testing something!"
        })
    }));
})

test('test 1', () => {
    const response = useFetch('http://mypage.com/order');
    console.log(response);
    expect(response)
})

afterEach(() => {
    jest.restoreAllMocks();
});