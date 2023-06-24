use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Counter {
    count: i32,
}

#[wasm_bindgen]
impl Counter {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self { count: 0 }
    }

    pub fn increment(&mut self) {
        self.count += 1;
    }

    pub fn decrement(&mut self) {
        self.count -= 1;
    }

    pub fn get_count(&self) -> i32 {
        self.count
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_new_counter() {
        let counter = Counter::new();
        assert_eq!(counter.get_count(), 0);
    }

    #[test]
    fn test_increment_counter() {
        let mut counter = Counter::new();
        counter.increment();
        assert_eq!(counter.get_count(), 1);
    }

    #[test]
    fn test_decrement_counter() {
        let mut counter = Counter::new();
        counter.decrement();
        assert_eq!(counter.get_count(), -1);
    }
}
