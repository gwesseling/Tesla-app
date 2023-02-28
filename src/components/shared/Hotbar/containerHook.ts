import {useState} from "react";

export default function useHotbar() {
    const [limit, setLimit] = useState(90);

    function onChange(value: number) {
        setLimit(value);
    }

    return {
        limit,
        onChange,
    };
}
